import React, { useEffect, useState } from 'react'
import './upcomingSection.scss'
import { useTranslation } from 'react-i18next';
import axios from "axios";

function UpcomingSection() {
  const { t } = useTranslation();
  const [info, setInfo] = useState('')
  const whichLang = localStorage.getItem("i18nextLng")

  async function getData() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/services/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setInfo(res.data)

    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const lang = whichLang === "az" ? "Aze" : "En"

  return (
    <section id='upcomingSection'>
      <div className="upBox">
        <div className="line"></div>
        <p>{t("Service")}</p>
      </div>
      <div className="downBox">
        {
          info && info.map((item, index) => (
            <div className="cart" key={index}>
              <div className="middleBox">
                <h1>{item.Servie[lang]}</h1>
                <span>{item.Desc[lang]}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default UpcomingSection