import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Arijit from '../../../content/images/Arijit.jpg';
import shan from '../../../content/images/shaan.jpg';
import Image from "next/image";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import style from '../components/style.module.css';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ArtistSection() {
  return (
    <><Box>
      <Grid container spacing={2}>
        <Grid xs={6} md={6} textAlign={'left'} p={0}>
          <h2>Artist</h2>
        </Grid>
        <Grid xs={6} md={6} textAlign={'right'} alignSelf={'end'}>
          <p style={{ marginBottom: '0px',color:'#686969' }}>See More</p>
        </Grid>
        
      </Grid>
    </Box>
    
    <div className={style.container}>
  
  <ul className={style.cards}>
    <li className={style.card}>
      <Card style={{    background: '#00000005',    
    padding: '6px',
    borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    <li className={style.card}>
      <Card style={{    background: '#00000005',    
    padding: '6px',
    borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    <li className={style.card}>
      <Card style={{    background: '#00000005',    
    padding: '6px',
    borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    <li className={style.card}>
      <Card style={{    background: '#00000005',    
    padding: '6px',
    borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    <li className={style.card}>
      <Card style={{background: '#00000005',padding: '6px', borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    <li className={style.card}>
      <Card style={{    background: '#00000005',    
    padding: '6px',
    borderRadius: '7px'}} >
        <Image
          src={Arijit}
          alt='apna-bana-le'

          style={{ width: '100%', height: '100%' }} />
        <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

      </Card>
    </li>
    
    
  </ul>
</div>
    
    
    
    
    
    
    
    
    {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={5} lg={4}>
            <Card >

            </Card>


          </Grid>
          <Grid container xs={12} md={7} lg={9} style={{ display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
    listStyle: "none",
    padding: '2px',
    margin: 0,
    overflow: "auto",
    maxWidth: "100%"}}>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
            <Grid xs={6} lg={4}>
              <Card >
                <Image
                  src={Arijit}
                  alt='apna-bana-le'

                  style={{ width: '100%', height: '100%' }} />
                <h4 style={{ margin: '0px' }}>Arijit Singh</h4>

              </Card>
            </Grid>
          </Grid>


        </Grid>
      </Box>*/}
      </> 
  );
}


