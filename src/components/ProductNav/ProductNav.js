import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "BLOG",
  },
  {
    menuItem: "NOURISH",
  },
  {
    menuItem: "SHOP",
  },
];

const ProductNav = () => {
  return (
    <nav>
      <Tab menu={{ attached: false, tabular: false }} panes={panes} />
    </nav>
  );
};

export default ProductNav;
