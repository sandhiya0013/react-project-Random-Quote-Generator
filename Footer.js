import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/thegoodquote/?hl=en">
        <InstagramIcon />
        </a>
        <a href="https://twitter.com/quotepage?lang=en">
        <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/InspirationalQuotesPageOfficial/">
        <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/pulse/20140320225941-140248-best-101-inspirational-quotes#main-content">
        <LinkedInIcon />
        </a>
        <a href="https://www.pinterest.com/kendieveryday/quotes/">
        <PinterestIcon/>
        </a>
      </div>
      <p>&copy; 2023 buffer.com</p>
    </div>
  );
}

export default Footer;