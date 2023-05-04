import Wrapper from "@/components/wrapper/Wrapper";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { fetchBanner } from "./api";
import HeroSection from "@/components/home/hero-section/HeroSection";
import { bannerResponse } from "@/type/types";


type homeprops = {
  banner : bannerResponse
}

const Home = ({banner}:homeprops) => {
  return (
    <main className={styles.main}>
      <Wrapper className={styles.container}>
      <HeroSection banner={banner} />
      </Wrapper>
    </main>
  );
};

export default Home;



export async function getStaticProps(){
  const banner = await fetchBanner()
  return{
    props:{
      banner,
  }
  }
}