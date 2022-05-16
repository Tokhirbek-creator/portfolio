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
    about: 'Lorem ipsum dolor,consectetur adipisicing elit.Nihil omnis quidem iusto libero debitis.',
    file: CV1,
  },
  {
    id: 2,
    logo: AVTR2,
    name: 'High School of Economics',
    about: 'Lorem ipsum dolor,consectetur adipisicing elit.Nihil omnis quidem iusto libero debitis.',
    file: CV2,
  },
  {
    id: 3,
    logo: AVTR3,
    name: 'UiPath: Automation Platform',
    about: 'Lorem ipsum dolor,consectetur adipisicing elit.Nihil omnis quidem iusto libero debitis.',
    file: CV3,
  },
];

function Achievements() {
  return (
    <section id="achievements">
      <h5>Review from clients</h5>
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
