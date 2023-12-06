// import React from 'react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {  Autoplay, Pagination, Navigation  } from 'swiper/modules';

const ServiceSection = () => {
  const services = [
    {
      id: "1",
      name: "Front-End Developer",
      image: "/images/services/1.png",
      body: "Mendesain dan memanage UI/UX. Membuat halaman web yang interaktif, menarik, dan sesuai dengan kebutuhan pengguna. Membangun halaman web responsif yang kompatibel dengan berbagai perangkat."
    },
    {
      id: "2",
      name: "Back-End Developer",
      image: "/images/services/2.png",
      body: "Mengembangkan logika aplikasi, manajemen pengguna, dan otorisasi. Mendesain dan mengintegrasikan database, API, dan logika server untuk mendukung fungsi yang kompleks dalam aplikasi web."
    },
    {
      id: "3",
      name: "Web Aplication",
      image: "/images/services/3.png",
      body: "Membuat aplikasi web dari awal atau pengembangan berkelanjutan. Dapat bekerja dengan Progressive Web Apps untuk menciptakan web yang memiliki fungsi aplikasi native."
    },
    {
      id: "4",
      name: "Mockup Design",
      image: "/images/services/4.png",
      body: "Mendesign interface sistem sebelum diterapkan pada implementasi code."
    },
    {
      id: "5",
      name: "Admin Dashboard",
      image: "/images/services/5.png",
      body: "Merancang dashboard yang responsif, memberikan tampilan yang bersih dan informasi yang relevan untuk memudahkan pengambilan keputusan."
    },
  ];

  return (
    <section>
      <div className="section-service py-5">
        <h1 className="section-title fw-bold text-white">My Services</h1>
        <div className="section-body" data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            centeredSlides={false}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide>
               <div className="card rounded-4 shadow">
                 <div className="service-image rounded-3">
                   <img src={service.image} alt="" />
                 </div>
                 <div className="service-content text-center">
                   <h5>{service.name}</h5>
                   <p>{service.body}</p>
                 </div>
               </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection;