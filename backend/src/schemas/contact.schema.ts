import { z } from 'zod';

export const contactSchema = z.object({
  gender: z.enum(['Mme', 'M']).nullable().optional(),

  lastname: z.string().min(2),
  firstname: z.string().optional(),

  email: z.email(),

  phone: z.string().min(10),

  message: z.string().min(10),

  requestVisit: z.boolean().default(false),
  callMeBack: z.boolean().default(false),
  morePhotos: z.boolean().default(false),

  availabilities: z.array(
    z.object({
      day: z.string(),
      hour: z.number(),
      minute: z.number(),
    })
  ).default([]),
});

export type ContactFormData = z.infer<typeof contactSchema>;