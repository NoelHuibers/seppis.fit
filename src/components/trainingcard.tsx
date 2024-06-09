import React from "react";

const TrainingCard = (props: {
  header: string;
  items: string[];
  pricePerSession: string;
}) => {
  const { header, items, pricePerSession } = props;

  return (
    <div className="border- rounded-lg border-2 bg-slate-50 px-4 py-2 shadow-md hover:border-yellow-500">
      <h3 className="py-2 text-xl font-bold">{header}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="py-2 font-medium text-gray-500 dark:text-gray-400">
        {pricePerSession}
      </div>
    </div>
  );
};

export default TrainingCard;
