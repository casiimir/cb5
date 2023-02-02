import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <h1>Welcome Here!</h1>
      <Image
        src="https://picsum.photos/1920/1080"
        alt="hero image"
        width={500}
        height={0}
        priority
      />
    </div>
  );
};

export default Hero;
