import React from "react";
import "./PortfolioList.scss";

const PortfolioList = ({ title, active }) => {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"}>
      {title}
    </li>
  );
};

export default PortfolioList;
