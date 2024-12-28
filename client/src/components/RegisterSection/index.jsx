import React from 'react'
import './registerSection.scss'
import { useTranslation } from 'react-i18next';

function RegisterSection() {
  const { t } = useTranslation();

  return (
    <section id='registerSection'>
      <div className="leftBox">
        <h2>{t("AboutTxt1")}</h2>
        <p>{t("AboutTxt2")}</p>
      </div>
    </section>
  )
}

export default RegisterSection