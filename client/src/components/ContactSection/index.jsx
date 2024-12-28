import React from 'react'
import './ContactSection.scss'
import { useTranslation } from 'react-i18next';

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id='contactSection'>
      <div className="rightBox">
        <h2>{t("Contact")}</h2>
        <form action="">
          <input type="text" placeholder={t("Name")} />
          <input type="text" placeholder={t("Service")} />
          <textarea type="text" placeholder={t("Message")} />
          <button>{t("SendMessage")}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection