import Image from 'next/image';
import styles from '@/app/page.module.css';


interface ImageType {
  src: string;
  alt: string;
  itemClass: string;
}


const images: ImageType[] = [
  {
    src: '/images/foto1.png',
    alt: 'Pessoa apresentando em um evento de tecnologia',
    itemClass: styles.item1,
  },
  {
    src: '/images/foto2.png',
    alt: 'Público assistindo a uma palestra',
    itemClass: styles.item2,
  },
  {
    src: '/images/foto3.png',
    alt: 'Grupo de participantes do evento posando para foto',
    itemClass: styles.item3,
  },
  {
    src: '/images/foto4.png',
    alt: 'Palestrante explicando sobre perícia forense computacional',
    itemClass: styles.item4,
  },
  {
    src: '/images/foto5.png',
    alt: 'Palestrante apontando para código em uma tela',
    itemClass: styles.item5,
  },


];

const ImageCollage = () => {
  return (
    <div className={styles.imageCollage}>
      {images.map((image, index) => (
        <div key={index} className={`${styles.collageItem} ${image.itemClass}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            priority={index < 4}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;