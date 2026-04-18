import { z } from 'zod';

export const contactSchema = z.object({
  civilite: z.enum(['Mme', 'M']).nullable().optional(),

  nom: z.string({ message: "Le nom est obligatoire" })
        .min(2, "Le nom doit contenir au moins 2 caractères"),

  prenom: z.string().optional(),

  
  email: z.email("Adresse email invalide"),

  telephone: z.string({ message: "Le téléphone est obligatoire" })
              .min(10, "Numéro de téléphone invalide"),

  message: z.string({ message: "Le message est obligatoire" })
            .min(10, "Le message doit contenir au moins 10 caractères"),

  demandeVisite: z.boolean().default(false),
  etreRappele: z.boolean().default(false),
  plusDePhotos: z.boolean().default(false),

  disponibilites: z.array(
    z.object({
      jour: z.string(),
      heure: z.string(),
      minute: z.string(),
    })
  ).default([]),
});

export type ContactFormData = z.infer<typeof contactSchema>;