// import React from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {  Pagination  } from 'swiper/modules';

const ServiceSection = () => {
  const services = [
    {
      id: "service1",
      name: "Front-End Development",
      image: "/images/services/1.png",
      body: "Mendesain dan memanage UI/UX. Membuat halaman web yang interaktif, menarik, dan sesuai dengan kebutuhan pengguna. Membangun halaman web responsif yang kompatibel dengan berbagai perangkat."
    },
    {
      id: "service2",
      name: "Back-End Development",
      image: "/images/services/2.png",
      body: "Mengembangkan logika aplikasi, manajemen pengguna, dan otorisasi. Mendesain dan mengintegrasikan database, API, dan logika server untuk mendukung fungsi yang kompleks dalam aplikasi web."
    },
    {
      id: "service3",
      name: "Web Aplication",
      image: "/images/services/3.png",
      body: "Membuat aplikasi web dari awal atau pengembangan berkelanjutan. Dapat bekerja dengan Progressive Web Apps untuk menciptakan web yang memiliki fungsi aplikasi native."
    },
    {
      id: "service4",
      name: "Mockup Design",
      image: "/images/services/4.png",
      body: "Mendesign interface sistem sebelum diterapkan pada implementasi code."
    },
    {
      id: "service5",
      name: "Admin Dashboard",
      image: "/images/services/5.png",
      body: "Merancang dashboard yang responsif, memberikan tampilan yang bersih dan informasi yang relevan untuk memudahkan pengambilan keputusan."
    },
  ];

  return (
    <section>
      <div className="section-service px-3 px-sm-4 px-md-5 px-xl-9 py-5 pt-0">
        <h1 className="section-title text-white"><span className='text-root-secondary'>Services</span> I Provide</h1>
        <div className="section-body" data-aos="fade-up" data-aos-duration="1000">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
             }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
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