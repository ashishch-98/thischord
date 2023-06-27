import Layout from "@/lib/components/Layout";
import { Box, Container } from "@mui/material";
import Image  from "next/image";
import banner from '../../content/images/ban1.png';
import CardSection from "@/lib/components/cardSection";
import KeysSection from "@/lib/components/KeysSection";
import ArtistSection from "@/lib/components/ArtistSection";
import style from '../lib/components/style.module.css';
export default function Home() {
  return (
    <Layout
      pageMetaData={{
        pageTitle: "thisChord | Home",
        pageDescription: "this chord app for original lyrics and chords",
      }}
    >
    {/* <Image
      src={banner}
      alt='apna-bana-le'    
      style={{ width: '100%', height: '100%' }} /> */}
      <div className={style.bgImage} />

      <Container >
        <Box className={style.box}>
          <CardSection />
        </Box> 
      
      <Box className={style.box}>
        <KeysSection />
      </Box>
      
      <Box className={style.box}>
        <ArtistSection />
      </Box>
      

      </Container>
    </Layout>
  );
}
