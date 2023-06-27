import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import tereHawale from '../../../content/images/Tere-hawale.png';
import apnaBanaLe from '../../../public/apna-bana-le.jpg';
import Image from "next/image";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import CardsSlider from './CardsSlider';
import style from '../components/style.module.css';
import { endianness } from 'os';
type Props = {}

const CardSection = (props: Props) => {
  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  

  const TrackItems = [
    <Card sx={{ maxWidth: 250 }} key={1} onDragStart={handleDragStart} className={style.categoryCard}>
      <CardActionArea>
        <Image
                src={tereHawale}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
        <CardContent style={{padding:'6px'}} >
          
              <h4 style={{ margin: '4px' }}>Tere Hawale</h4>
              <p style={{ margin: '4px' }}>Arijit Singh</p>
          
        </CardContent>
      </CardActionArea>
    </Card>,
    <Card sx={{ maxWidth: 250 }} key={2} onDragStart={handleDragStart} className={style.categoryCard}>
      <CardActionArea>
        <Image
                src={apnaBanaLe}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
        <CardContent style={{padding:'6px'}}>
          
              <h4 style={{ margin: '4px' }}>Tere Hawale</h4>
              <p style={{ margin: '4px' }}>Arijit Singh</p>
          
        </CardContent>
      </CardActionArea>
    </Card>,
    <Card sx={{ maxWidth: 250 }} key={3} onDragStart={handleDragStart} className={style.categoryCard}>
      <CardActionArea>
        <Image
                src={tereHawale}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
        <CardContent style={{padding:'6px'}}>
          
              <h4 style={{ margin: '4px' }}>Tere Hawale</h4>
              <p style={{ margin: '4px' }}>Arijit Singh</p>
          
        </CardContent>
      </CardActionArea>
    </Card>,
    <Card sx={{ maxWidth: 250 }} key={4} onDragStart={handleDragStart} className={style.categoryCard}>
    <CardActionArea>
      <Image
              src={apnaBanaLe}
              alt='apna-bana-le'
              style={{ width: '100%', height: '100%' }} />
      <CardContent style={{padding:'6px'}}>
        
            <h4 style={{ margin: '4px' }}>Tere Hawale</h4>
            <p style={{ margin: '4px' }}>Arijit Singh</p>
        
      </CardContent>
    </CardActionArea>
  </Card>,
  ];





  return (
    <>
    
    <Box className={style.bigblue}>
      <Grid container spacing={2}>
        <Grid xs={6} md={6} textAlign={'left'} p={0} >
          <h2 >Tracks</h2>
        </Grid>
        <Grid xs={6} md={6} textAlign={'right'} alignSelf={'end'}>
          <p style={{marginBottom:'0px' , color:'#686969'}}>See More</p>
        </Grid>
        <CardsSlider items={TrackItems}/>
      </Grid>
    </Box>
   

   {/* categories */}
    <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/* {Array.from(Array(5)).map((_, index) => ( */}
          <Grid xs={2} md={6} textAlign={'left'} p={0} >
          <h2 style={{marginTop:'0px'}}>Categories</h2>
        </Grid>
        <Grid xs={2} md={6} textAlign={'right'} alignSelf={'end'}>
          <p style={{marginBottom:'0px',color:'#686969'}}>See More</p>
        </Grid>
          <Grid xs={2} md={3}>
            <Card className={style.categoryCard}>
              <Image
                src={tereHawale}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
                <CardContent style={{padding:'6px'}} >
                  <h4 style={{ margin: '0px' }}>Tere Hawale</h4>
                  <p style={{ margin: '0px' }}>Arijit Singh</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} md={3}>
            <Card className={style.categoryCard}>
              <Image
                src={apnaBanaLe}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
              <CardContent style={{padding:'6px'}}>
                  <h4 style={{ margin: '0px' }}>Tere Hawale</h4>
                  <p style={{ margin: '0px' }}>Arijit Singh</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} md={3}>
            <Card className={style.categoryCard}>
              <Image
                src={tereHawale}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
              <CardContent style={{padding:'6px'}}>
                  <h4 style={{ margin: '0px' }}>Tere Hawale</h4>
                  <p style={{ margin: '0px' }}>Arijit Singh</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} md={3}>
            <Card className={style.categoryCard}>
              <Image
                src={apnaBanaLe}
                alt='apna-bana-le'
                style={{ width: '100%', height: '100%' }} />
              <CardContent style={{padding:'6px'}}>
                  <h4 style={{ margin: '0px' }}>Tere Hawale</h4>
                  <p style={{ margin: '0px' }}>Arijit Singh</p>
              </CardContent>
            </Card>
          </Grid>
          
          {/* ))} */}
        </Grid>
      </Box></>
    
  )
}

export default CardSection