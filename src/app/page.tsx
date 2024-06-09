import { Toaster } from "sonner";
import Contactform from "~/components/contactform";
import Footer from "~/components/footer";
import Header from "~/components/header";
import MainSection from "~/components/mainsection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <main className="flex flex-col">
        <MainSection />
        <Contactform />
        <Toaster />
      </main>
      <Footer />
    </main>
  );
}
