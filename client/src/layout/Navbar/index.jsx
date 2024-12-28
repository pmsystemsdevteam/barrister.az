import React, { useState } from "react";
import "./navbar.scss";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Logo from "../../image/Logo.png";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openLangBox, setOpenLangBox] = useState(false);
  const defaultLang = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";
  const [whichLang, setWhichLang] = useState(defaultLang);
  const languages = ["AZ", "EN"];
  const filteredLanguages = languages.filter((lang) => lang !== whichLang);
  const { t } = useTranslation();

  function handleOpennavbar() {
    setOpenNavbar(!openNavbar);
  }

  function changeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", JSON.stringify(lang.toUpperCase()));
  }

  function handleOpenLangBox() {
    setOpenLangBox(!openLangBox);
  }

  return (
    <nav>
      <div className="navbarLeftBox">
        <div className="iconBox">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="textBox">
          <ul>
            <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
              <li>{t("Home")}</li>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
              <li>{t("About")}</li>
            </ScrollLink>
            <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
              <li>{t("Service")}</li>
            </ScrollLink>
            <ScrollLink to="News" smooth={true} duration={500} offset={-50}>
              <li>{t("News")}</li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
              <li>{t("Contact")}</li>
            </ScrollLink>
          </ul>
          <div className="selectBox">
            <div className="mainLang" onClick={handleOpenLangBox}>
              <p style={{ fontSize: "20px" }}>{whichLang}</p>
              <IoIosArrowDown />
            </div>
            <div className={`allLangsBox ${openLangBox ? "opened" : ""}`}>
              {filteredLanguages.map((lang) => (
                <div
                  key={lang}
                  className="langBox"
                  onClick={() => {
                    setWhichLang(lang);
                    setOpenLangBox(false);
                    changeLang(lang.toLowerCase());
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="menuBox" onClick={handleOpennavbar}>
          <IoMenu />
        </div>
      </div>
      <div className="navbarRightBox">
        <FaPhoneVolume style={{ fontSize: "40px" }} />
        <h1>+994 50 593 18 38</h1>
      </div>
      <div className={`respNavbar ${openNavbar ? "openNavbar" : ""}`}>
        <ul>
          <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>{t("Home")}</li>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>{t("About")}</li>
          </ScrollLink>
          <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>{t("Service")}</li>
          </ScrollLink>
          <ScrollLink to="News" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>{t("News")}</li>
          </ScrollLink>
          <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>{t("Contact")}</li>
          </ScrollLink>
        </ul>
        <div className="iconsBox">
          <div className="closeBtn" onClick={handleOpennavbar}>
            <IoMdClose />
          </div>
          <p>
            <FaPinterest />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
          <p>
            <IoLogoInstagram />
          </p>
          <p>
            <FaFacebookF />
          </p>
          <p>
            <FaTwitter />
          </p>
        </div>
        <div className="selectBox">
          <div className="mainLang" onClick={handleOpenLangBox}>
            <p style={{ fontSize: "20px" }}>{whichLang}</p>
            <IoIosArrowDown />
          </div>
          <div className={`allLangsBox ${openLangBox ? "opened" : ""}`}>
            {filteredLanguages.map((lang) => (
              <div
                key={lang}
                className="langBox"
                onClick={() => {
                  setWhichLang(lang);
                  setOpenLangBox(false);
                  changeLang(lang.toLowerCase());
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
