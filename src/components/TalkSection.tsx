"use client";

import styles from "@/styles/talkSection.module.css";
import Image from "next/image";
import { useState } from "react";

import type { Swiper as SwiperInstance } from "swiper";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Talk = {
  src: string;
  title: string;
  speaker: string;
  date: string;
};

const palestras: Talk[] = [
  {
    src: "/images/palestras/daniel cavalcanti.jpg",
    title: "Aprendizado por Reforço: A Inteligência Artificial que aprende com experiências",
    speaker: "Prof. Daniel Cavalcanti Jeronymo - UTFPR Toledo",
    date: "25/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  {
    src: "/images/palestras/mariana carmin.jpg",
    title: "Computação de Alto Desempenho",
    speaker: "Mariana Carmin - Barcelona Supercomputing Center",
    date: "26/08 - 10h00 (Remoto)",
  },
  {
    src: "/images/palestras/renan breda.jpg",
    title: "A Necessidade do Registro de Marca, Patente e Software",
    speaker: "Renan Breda",
    date: "26/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  {
    src: "/images/palestras/cesar henrique.jpg",
    title: "Desenvolvimento de Software no Mercado Atual: Perfil, Salários e Tecnologias em Alta",
    speaker: "Cesar Henrique Farago",
    date: "27/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  {
    src: "/images/palestras/gabriel leite.png",
    title: "DevOps",
    speaker: "Gabriel Leite da Rocha",
    date: "27/08 - 20h30 (Anfiteatro - Bloco E)",
  },
];

const minicursos: Talk[] = [

  {
    src: "/images/minicursos/michel.png",
    title: "Introdução à Raspagem de Dados: APIs e dicas para projetos iniciantes",
    speaker: "Michel Gomes de Souza",
    date: "25/08 - 14h00 as 17h00 (E100 - 20 vagas)",
  },
  {
    src: "/images/minicursos/daniel emanuel.jpeg",
    title: "Orquestração de Inteligência Artificial para fluxos de trabalho complexos com Agentes de IA",
    speaker: "Daniel Emanuel Pereira da Silva",
    date: "25/08 - 14h00 as 17h00 (E102 - 20 vagas)",
  },
  {
    src: "/images/minicursos/foleiss.png",
    title: "Processamento de Áudio",
    speaker: "Prof. Juliano Foleis",
    date: "25/08 e 26/08 - 14h00 as 17h00 (E001 - 30 vagas)",
  },
  {
    src: "/images/minicursos/ducati.png",
    title: "Desenvolvimento de Jogos",
    speaker: "Caio Ducati",
    date: "25/08, 26/08 e 27/08 - 14h00 as 17h00 (E104 - 20 vagas)",
  },
  {
    src: "/images/minicursos/campiolo.png",
    title: "Introdução à Perícia Forense Computacional",
    speaker: "Prof. Rodrigo Campiolo",
    date: "26/08, 27/08 e 28/08 - 14h00 as 17h00 (E100 - 20 vagas)",
  },
  {
    src: "/images/minicursos/luiz.jpg",
    title: "Linux",
    speaker: "Prof. Luiz Arthur",
    date: "26/08, 27/08 e 28/08 - 14h00 as 17h00 (E102 - 20 vagas)",
  },
  {
    src: "/images/minicursos/rag.png",
    title: "Computação Paralela com GPU",
    speaker: "Prof. Rogério Gonçalves",
    date: "26/08 e 28/08 - 14h00 as 17h00 (E103 - 20 vagas)",
  },
  {
    src: "/images/minicursos/andre felipe.png",
    title: "Uso de uma pipeline RAG (Retrieval Augmented Generation) para a injeção de contexto em grandes modelos de linguagem",
    speaker: "André Felipe Wonsik Alves",
    date: "27/08 - 14h00 as 17h00 (E001 - 20 vagas)",
  },
  {
    src: "/images/minicursos/matheus andrade.jpeg",
    title: "Next.js & Clean Arquiteture: Construindo um gerenciador de senhas",
    speaker: "Matheus Andrade",
    date: "27/08, 28/08 e 29/08 - 19h00 as 21h30 (E007 - 20 vagas)",
  },
  {
    src: "/images/minicursos/walter.jpg",
    title: "UX na Prática: Dos Requisitos ao Protótipo com IA",
    speaker: "Prof. Walter Takashi Nakamura",
    date: "28/08 - 14h00 as 17h00 (E001 - 30 vagas)",
  },
  {
    src: "/images/minicursos/william.jpg",
    title: "Introdução à Computação Quântica usando o Qiskit",
    speaker: "William Walace",
    date: "29/08 - 14h00 as 17h00 (E100 - 20 vagas)",
  },
];

const conversas: Talk[] = [
  { src: "/images/rodas de conversa/ivanilton.png", title: "PPGCC-CM", speaker: "Prof. Ivanilton Polato", date: "26/08 - 20h30 (Anfiteatro)" },
  { src: "/images/rodas de conversa/dupla.png", title: "Dupla Diplomação", speaker: "", date: "28/08 - 19h00 (Anfiteatro)" },
  { src: "/images/foto2.png", title: "Conversa com Egressos", speaker: "Egressos BCC", date: "26/08 - 20h30 (Anfiteatro)" },
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
        slidesPerView={3} 
        loop={false}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 30, 
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

      <h2 id="minicursos" className={styles.sectionTitle}>
        Minicursos
      </h2>
      <Carousel items={minicursos} />

      <h2 className={styles.sectionTitle}>Rodas de Conversa</h2>
      <Carousel items={conversas} />
    </section>
  );
};

export default TalksSection;
