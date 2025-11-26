import React from "react";
import PriceRange from "./PriceRange";
import CheckboxFilter from "./CheckboxFilter";

const Sidebar = () => {
  return (
    <div className="space-y-5">
      <PriceRange />
      <CheckboxFilter
        title="Categories"
        options={[
          { label: "Electronics", value: "electronics" },
          { label: "Clothing", value: "clothing" },
          { label: "Home & Kitchen", value: "home-kitchen" },
        ]}
      />
      <CheckboxFilter
        title="Brands"
        options={[
          { label: "Apple", value: "apple" },
          { label: "Samsung", value: "samsung" },
          { label: "Sony", value: "sony" },
        ]}
      />
      <CheckboxFilter
        title="Availability"
        options={[
          { label: "In Stock", value: "in-stock" },
          { label: "Out of Stock", value: "out-of-stock" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
