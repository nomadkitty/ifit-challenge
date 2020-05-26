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
      <div className="socialMedia">
        {FooterData.socialMedia.map((ele) => (
          <img src={ele} alt="social media" />
        ))}
      </div>
      <div className="bottom">
        <div className="language">
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="chinese">Chinese</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
          </select>
        </div>
        <div className="legal">
          <p>© iFit.com. All Rights Reserved.</p>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
