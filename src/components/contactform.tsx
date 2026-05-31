"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { onSubmitAction } from "~/lib/formSubmit";
import {
  type ContactFormType,
  contactFormSchema,
} from "../types/contactformschema";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [state, formAction] = useActionState(onSubmitAction, {
    message: "",
  });

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const handledMessage = useRef<string | null>(null);

  useEffect(() => {
    const message = state?.message;
    if (!message || handledMessage.current === message) return;
    handledMessage.current = message;

    if (message === "Success") {
      toast.success("E-Mail wurde versandt.", { duration: 5000 });
      form.reset();
    } else if (
      message === "Falsche Eingabe" ||
      message === "Falsche Eingabe Email"
    ) {
      toast.error("Eingabe ist ungültig. Bitte überprüfen Sie die Felder.");
    }
  }, [form, state]);

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
        <Form {...form}>
          <form
            className="flex w-3/4 flex-col space-y-2 md:w-1/2"
            action={formAction}
            ref={formRef}
            onSubmit={(evt) => {
              evt.preventDefault();
              const node = formRef.current;
              if (!node) return;
              void form.handleSubmit(() => {
                formAction(new FormData(node));
              })(evt);
            }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nachricht</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={6} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="honeypot"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormLabel>Honeypot</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Senden</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
