import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import { contactSchema } from '../schemas/contact.schema';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const validatedData = contactSchema.parse(req.body);

 
    const contact = await prisma.contact.create({
      data: {
        civilite: validatedData.civilite,
        nom: validatedData.nom,
        prenom: validatedData.prenom,
        email: validatedData.email,
        telephone: validatedData.telephone,
        message: validatedData.message,
        demandeVisite: validatedData.demandeVisite,
        etreRappele: validatedData.etreRappele,
        plusDePhotos: validatedData.plusDePhotos,
        disponibilites: validatedData.disponibilites,
      },
    });

    res.status(201).json({
      success: true,
      message: "Votre demande a été enregistrée avec succès.",
      contactId: contact.id,
    });
  } catch (error: any) {
   
    if (error.name === 'ZodError') {
      res.status(400).json({
        success: false,
        message: "Données invalides",
        errors: error.errors.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
      return;
    }


    console.error('Error creating contact:', error);

    res.status(500).json({
      success: false,
      message: "Une erreur interne du serveur est survenue. Veuillez réessayer plus tard.",
    });
  }
};