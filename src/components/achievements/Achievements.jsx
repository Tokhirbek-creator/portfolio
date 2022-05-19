import React from 'react';
import './achievements.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CV1 from '../../assets/EBC-certificate-Karamatov.tif';
import CV2 from '../../assets/Diploma_HSE_Karamatov_Tokhirbek.pdf';
import CV3 from '../../assets/LearningPath_Certificate_Karamatov_Tokhirbek.pdf';
import AVTR1 from '../../assets/logo1.jpg';
import AVTR2 from '../../assets/logo2.svg';
import AVTR3 from '../../assets/logo3.jpg';
// import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    id: 1,
    logo: AVTR1,
    name: 'Elbrus Bootcamp',
    about: 'Finished (Conquered) training at Elbrus Bootcamp as a FullStack JavaScript Developer.',
    file: CV1,
  },
  {
    id: 2,
    logo: AVTR2,
    name: 'High School of Economics',
    about: '2nd place winner in Mathematics at the International Youth Olympiad (High School of Economics) in 2021.',
    file: CV2,
  },
  {
    id: 3,
    logo: AVTR3,
    name: 'UiPath: Automation Platform',
    about: 'Finished a beginner\'s course in RPA development and tried the actual process of creating automation.',
    file: CV3,
  },
];

function Achievements() {
  return (
    <section id="achievements">
      <h2>My Achievements</h2>

      <Swiper
        className="container achievements__container"
            // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
        data.map(({
          id, logo, name, about, file,
        }) => (
          <SwiperSlide key={id} className="achievement">
            <div className="organization__avatar">
              <img src={logo} alt="logo" />
            </div>
            <h5 className="organization__name">{name}</h5>
            <small className="achievements__about">{about}</small>
            <a href={file} download className="btn">Dowload Diploma</a>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </section>
  );
}

export default Achievements;
