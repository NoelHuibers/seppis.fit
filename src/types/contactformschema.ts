import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  message: z.string().min(1, "Nachricht ist erforderlich"),
});

export type ContactForm = z.output<typeof ContactFormSchema>;
