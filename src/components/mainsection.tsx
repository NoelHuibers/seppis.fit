import TrainingCard from "./trainingcard";

const MainSection = () => {
  return (
    <section className="h-screnn flex min-h-screen items-center justify-center bg-gray-100 py-12 dark:bg-gray-900 md:py-16 lg:py-20">
      <div className="min-h-fit px-4 md:px-6">
        <h1 className="pb-6 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Willkommen bei Seppis Fit @ Home
        </h1>
        <p className="pb-10 text-center text-gray-500 dark:text-gray-400">
          Entfalten Sie Ihr volles Potenzial mit Sascha Seppmann als ihren
          Personaltrainer und Deinstleister.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <TrainingCard
            header="Personaltrainer"
            items={[
              "Individuelle Betreuung",
              "Indivuelles Training",
              "Auch bei dir zuhause!",
            ]}
            pricePerSession="Ab 40 €/Einheit"
          />
          <TrainingCard
            header="Wellnessmassage"
            items={[
              "Sportmassage",
              "traditionelle balinesische Massage",
              "Klopftechniken",
            ]}
            pricePerSession="Ab 25 €/Einheit"
          />
          <TrainingCard
            header="Knochenbrecher für Tiere"
            items={[
              "Mobilisierung der Gelenke",
              "für Hunde, Katzen",
              "und sogar Pferde!",
            ]}
            pricePerSession="Ab 25 €"
          />
          <TrainingCard
            header="Gruppentraining"
            items={["Aquagym", "Crosstraining", "Gruppentraining"]}
            pricePerSession="Ab 7,50 €/Person"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
