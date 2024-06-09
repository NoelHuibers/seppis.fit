import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Contactform = () => {
  return (
    <section className="flex min-h-screen flex-col bg-slate-50 py-6 dark:bg-gray-800 md:py-8">
      <div className="px-4 md:px-12">
        <h2 className="pb-6 text-2xl font-bold md:text-4xl">
          Kontaktieren Sie mich
        </h2>
        <p className="pb-10 text-gray-500 dark:text-gray-400">
          Haben Sie eine Frage oder möchten Sie einen Termin buchen? Füllen Sie
          das Formular unten aus.
        </p>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <form className="flex w-3/4 flex-col space-y-2 md:w-1/2">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name" className="text-lg">
              Name
            </Label>
            <Input id="name" type="text" required />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input id="email" type="email" required />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="nachricht" className="text-lg">
              Nachricht
            </Label>
            <Textarea id="nachricht" rows={6} required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
