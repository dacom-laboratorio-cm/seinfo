"use client";

import { useState } from "react";
import styles from "@/styles/talkSection.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperInstance } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type Talk = {
  src: string;
  title: string;
  speaker: string;
  date: string;
};

const palestras: Talk[] = [
  // ... seus dados de palestras
  { src: "/images/foto3.png", title: "Desafios do mercado de trabalho", speaker: "Igor Wiese", date: "06/08 - 19:30" },
  { src: "/images/foto4.png", title: "Computação Forense", speaker: "Convidado Especial", date: "04/08 - 18:00" },
  { src: "/images/foto1.png", title: "Linux para Iniciantes", speaker: "Luiz Arthur Feitosa", date: "02/08 - 14:00" },
  { src: "/images/foto2.png", title: "Banco de Dados Avançado", speaker: "Maria Silva", date: "05/08 - 10:00" },
];

const minicursos: Talk[] = [
  // ... seus dados de minicursos
  { src: "/images/foto1.png", title: "Linux para Iniciantes", speaker: "Luiz Arthur Feitosa", date: "07/08 - 19:30" },
  { src: "/images/foto2.png", title: "Banco de Dados Avançado", speaker: "Maria Silva", date: "05/08 - 10:00" },
  { src: "/images/foto3.png", title: "Mercado de Trabalho", speaker: "Igor Wiese", date: "03/08 - 19:30" },
  { src: "/images/foto4.png", title: "Computação Forense", speaker: "Convidado Especial", date: "04/08 - 18:00" },
];

type CarouselProps = {
  items: Talk[];
};

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeItem = items[activeIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.infoContainer}>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.speaker}</p>
        <p>{activeItem.date}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // MODIFICADO: De 'auto' para 3 para garantir a visão dos slides laterais
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 30, // MODIFICADO: Rotação menor para melhor visualização
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className={styles.swiperContainer}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              src={item.src}
              alt={item.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const TalksSection = () => {
  return (
    <section id="palestras" className={styles.talksSection}>
      <h2 className={styles.sectionTitle}>Palestras</h2>
      <Carousel items={palestras} />

      <h2 className={styles.sectionTitle}>Minicursos</h2>
      <Carousel items={minicursos} />
    </section>
  );
};

export default TalksSection;