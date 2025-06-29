import React from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  items: {
    icon: LucideIcon;
    title: string;
    description?: string;
  }[];
};

const ValueProps: React.FC<Props> = ({ items }) => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-custom p-5 rounded-lg flex items-start gap-4"
              >
                <Icon className="text-gray-700 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm text-gray-800">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-gray-600">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
