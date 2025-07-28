import styles from "@/app/page.module.css";
import Image from "next/image";

const ImageCollage = () => {
  return (
    <div className={styles.imageCollageWrapper}>
      <Image src="/images/ImageCollage.png" alt="Colagem de imagens do evento" width={900} height={500} priority />
    </div>
  );
};

export default ImageCollage;
