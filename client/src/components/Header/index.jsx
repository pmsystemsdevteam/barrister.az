import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiBankLine } from "react-icons/ri";
import { FaOilWell } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="headerSwiperBox">
            <div className="upBox">
              <h1>
                {t("HeadText")}
              </h1>
            </div>
            <div className="dowBox">
              <div className="headerCart">
                <IoPeopleSharp className='icon' />
                <div className="div">
                  <h1>{t("HeadTxt1")}
                  </h1>
                </div>
              </div>
              <div className="headerCart">
                <RiBankLine />
                <div className="div">
                  <h1>{t("HeadTxt2")}</h1>
                </div>
              </div>
              <div className="headerCart">
                <FaOilWell />
                <div className="div">
                  <h1>{t("HeadTxt3")}</h1>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </header>
  )
}

export default Header