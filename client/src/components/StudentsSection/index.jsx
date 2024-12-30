import React, { useEffect, useState } from 'react'
import './studentsSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import axios from "axios";

function StudentsSection() {
  const { t } = useTranslation();
  const [info, setInfo] = useState('')
  const whichLang = localStorage.getItem("i18nextLng")

  async function getData() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/news/", {
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
    <section id='studentsSection'>
      <div className="notMean"></div>
      <div className="upBox">
        <div className="line"></div>
        <p>{t("News")}</p>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {
          info && info.map((item, index) => (
            <SwiperSlide>
              <div className="sliderBox" key={index}>
                <p>{item.News[lang]}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  )
}

export default StudentsSection