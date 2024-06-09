"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ContactFormSchema,
  type ContactForm,
} from "../types/contactformschema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const form = useForm<ContactForm>({
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
        <Form {...form}>
          <form
            className="flex w-3/4 flex-col space-y-2 md:w-1/2"
            onSubmit={form.handleSubmit(onSubmit)}
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
