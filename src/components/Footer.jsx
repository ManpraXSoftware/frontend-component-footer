import React from "react";
import Elektrobit from "../assets/Elektrobit.png";
import Microsoft from "../assets/microsoft-logo-hd-26.png";
import Congizant from "../assets/Congnizant_Foundation_india_Logo.png";
import CCICON from "../assets/cc_icon_white_x2.png";
import ATTRIBUTRICON from "../assets/attribution_icon_white_x2.png";
import NCWHITE from "../assets/nc_white_x2.png";
import NDWHITE from "../assets/nd_white_x2.png";
import '../_footer.scss';

const Footer = ()=>{
  const currentYear = new Date().getFullYear();
  return(<div className="wrapper-footer"> 
    <footer id="footer">
      <div className="container">
        <div className="references edxlogo" id="footer-logo">
          
          <div className="elektrobit-logo">
            <img src={Elektrobit} width="60" alt="Supported by Elektrobit" />
            <p className="footerlogo" style={{marginTop:"29px",fontFamily:"Segeo UI"}}>Supported by Elektrobit</p>
          </div>
          <div className="elektrobit-logo">
            <img src={Microsoft} width="108" height="23" style={{marginTop:"22px"}} alt="Supported by Microsoft" />
            <p className="footerlogo" style={{marginTop:"44px",fontFamily:"Segeo UI"}}>Supported by Microsoft</p>
          </div>
          <div className="elektrobit-logo">
          <img src={Congizant} style={{backgroundColor:"white"}} st width="156" height="78" alt="Supported by Cognizant" />
            <p className="footerlogo" style={{fontFamily:"Segeo UI"}}>Supported by Cognizant</p>
          </div>
          
          <a href="http://open.edx.org">
          <img src="https://files.edx.org/openedx-logos/open-edx-logo-tag.png" width="175" height="70" alt="Powered by Open edX" />
          </a>
          
        </div>
        <p className="reserved">All rights reserved to Vision Empower 2021-{String(currentYear).slice(-2)}</p>
        <div className="column">
          <aside>
          <div className="image-icons">
            <img src={CCICON} width="30" height="30" alt="" />
            <img src={ATTRIBUTRICON} width="30" height="30" alt="" />
            <img src={NCWHITE} width="30" height="30" alt="" />
            <img src={NDWHITE} width="30" height="30" alt="" />
          </div>
           
          <p className="footer-icon-text" tabIndex={0}>Except where otherwise noted, content on this site is licensed under a <a className="subfoot" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license">Creative Commons Attribution 4.0 International license</a>. Icons by The Noun Project. <br/> Except for XRCVC content.</p>
          </aside>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer;