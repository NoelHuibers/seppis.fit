import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  nachricht: z.string().min(1, "Nachricht ist erforderlich"),
});

type ContactForm = z.output<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  return (
    <section className="flex h-full flex-col bg-slate-50 py-6 dark:bg-gray-800 md:h-screen md:py-8">
      <div className="px-4 md:px-12">
        <h2 className="pb-2 text-2xl font-bold md:pb-6 md:text-4xl">
          Kontaktieren Sie mich
        </h2>
        <p className="pb-4 text-gray-500 dark:text-gray-400 md:pb-10">
          Haben Sie eine Frage oder möchten Sie einen Termin buchen? Füllen Sie
          das Formular unten aus.
        </p>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <form
          className="flex w-3/4 flex-col space-y-2 md:w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name" className="text-lg">
              Name
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} type="text" required />}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} type="email" required />}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="nachricht" className="text-lg">
              Nachricht
            </Label>
            <Controller
              name="nachricht"
              control={control}
              render={({ field }) => <Textarea {...field} rows={6} required />}
            />
            {errors.nachricht && (
              <p className="text-red-500">{errors.nachricht.message}</p>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
