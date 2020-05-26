import React from "react";
import { Link } from "react-router-dom";
import FooterData from "../../data/FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerMenu">
        <div className="company">
          <p>Company</p>
          <ul className="footerLinksList">
            {FooterData.company.map((ele) => (
              <Link to="#">
                {ele}
                <br />
              </Link>
            ))}
          </ul>
        </div>
        <div className="account">
          <p>Account</p>
          <ul className="footerLinksList">
            {FooterData.account.map((ele) => (
              <Link to="#">
                {ele}
                <br />
              </Link>
            ))}
          </ul>
        </div>
        <div className="support">
          <p>Support</p>
          <ul className="footerLinksList">
            {FooterData.support.map((ele) => (
              <Link to="#">
                {ele}
                <br />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="socialMedia"></div>
    </div>
  );
};

export default Footer;
