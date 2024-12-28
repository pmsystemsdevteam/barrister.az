import React from 'react'
import './footer.scss'
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="div">{t("CopyRight")}</div>
      <div className="iconBox">
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
    </footer>
  )
}

export default Footer