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
    alt: 'Descrição da foto 1',
    itemClass: styles.item1,
  },
  {
    src: '/images/foto2.png',
    alt: 'Descrição da foto 2',
    itemClass: styles.item2,
  },
  {
    src: '/images/foto3.png',
    alt: 'Descrição da foto 3',
    itemClass: styles.item3,
  },
  {
    src: '/images/foto4.png',
    alt: 'Descrição da foto 4',
    itemClass: styles.item3,
  },
  {
    src: '/images/foto5.png',
    alt: 'Descrição da foto 5',
    itemClass: styles.item3,
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
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
