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
  //25/08
  {
    src: "/images/palestras/sabo.png",
    title: "Fala da Coordenação",
    speaker: "Prof. Paulo Sabo",
    date: "25/08 - 16h00 (Anfiteatro)",
  },
  {
    src: "/images/palestras/daniel cavalcanti.jpg",
    title: "Aprendizado por Reforço: A Inteligência Artificial que aprende com experiências",
    speaker: "Prof. Daniel Cavalcanti Jeronymo - UTFPR Toledo",
    date: "25/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  //26/08
  {
    src: "/images/palestras/mariana carmin.jpg",
    title: "Computação de Alto Desempenho",
    speaker: "Mariana Carmin - Barcelona Supercomputing Center",
    date: "26/08 - 10h00 (Remoto)",
  },
  {
    src: "/images/palestras/sabo.png",
    title: "Extensão Universitária: Tudo o que você precisa saber",
    speaker: "Prof. Paulo Sabo",
    date: "26/08 - 14h00 (Anfiteatro)",
  },
  {
    src: "/images/palestras/andre.jpg",
    title: "Por Dentro da Iniciação Científica: Bolsas, Projetos e Oportunidades",
    speaker: "Prof. André Schwerz e Prof. Leandro Ensina",
    date: "26/08 - 15h30 (Anfiteatro)",
  },
  {
    src: "/images/palestras/renan breda.jpg",
    title: "A Necessidade do Registro de Marca, Patente e Software",
    speaker: "Renan Breda",
    date: "26/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  //27/08
  {
    src: "/images/palestras/cesar henrique.jpg",
    title: "Desenvolvimento de Software no Mercado Atual: Perfil, Salários e Tecnologias em Alta",
    speaker: "Cesar Henrique Farago",
    date: "27/08 - 19h00 (Anfiteatro - Bloco E)",
  },
  {
    src: "/images/palestras/gabriel leite.jpg",
    title: "DevOps",
    speaker: "Gabriel Leite da Rocha",
    date: "27/08 - 20h30 (Anfiteatro - Bloco E)",
  },
  //28/08
  {
    src: "/images/palestras/Design sem nome (1).png",
    title: "Linguagens de Programação Esotéricas",
    speaker: "Thiago Alexsander da Costa Pereira",
    date: "28/08 - 14h00 (Anfiteatro)",
  },
  {
    src: "/images/palestras/fabricio.jpeg",
    title: "Saúde Mental",
    speaker: "Fabrício Moura - Psicólogo da UTFPR-CM",
    date: "28/08 - 15h00 (Anfiteatro)",
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
  { src: "/images/rodas de conversa/ivanilton.png", title: "PPGCC-CM", speaker: "Prof. Ivanilton Polato", date: "27/08 - 15h00 (Anfiteatro)" },
  { src: "/images/rodas de conversa/Dupla.png", title: "Dupla Diplomação", speaker: "", date: "28/08 - 19h00 (Anfiteatro)" },
  {
    src: "/images/rodas de conversa/egressos.jpeg",
    title: "Conversa com Egressos",
    speaker: "Egressos BCC",
    date: "26/08 - 20h30 (Anfiteatro)",
  },
];

const atividades: Talk[] = [
  { src: "/images/atividades/renegados.jpg", title: "Jogos Eletrônicos", speaker: "Atlética Renegados", date: "26/08 - 17h00" },
  { src: "/images/atividades/renegados.jpg", title: "Live Coding", speaker: "Atlética Renegados", date: "27/08 - 16h30" },
  { src: "/images/atividades/renegados.jpg", title: "Quizzes", speaker: "Atlética Renegados", date: "28/08 - 17h00" },
  { src: "/images/atividades/renegados.jpg", title: "Atividade Recreativa", speaker: "Atlética Renegados", date: "29/08 - 14h00" },
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
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image
              src={item.src}
              alt={item.title}
              className={styles.image}
              width={420}
              height={250}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
      <div className={styles.separator}></div>
      <h2 className={styles.sectionTitle}>Palestras</h2>
      <Carousel items={palestras} />

      <div className={styles.separator}></div>

      <h2 id="minicursos" className={styles.sectionTitle}>
        Minicursos
      </h2>
      <Carousel items={minicursos} />

      <div className={styles.separator}></div>

      <h2 className={styles.sectionTitle}>Rodas de Conversa</h2>
      <Carousel items={conversas} />

      <h2 className={styles.sectionTitle}>Atividades</h2>
      <Carousel items={atividades} />
    </section>
  );
};

export default TalksSection;
