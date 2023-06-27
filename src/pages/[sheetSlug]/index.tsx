import Layout from "@/lib/components/Layout";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ChordSheetJS, { Chord, ChordLyricsPair } from "chordsheetjs";
import Image from "next/image";

import * as React from 'react';
import style from '../../lib/components/style.module.css';

import { Box, Grid, CardMedia, CardContent, Typography, IconButton, BottomNavigation, BottomNavigationAction } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import MenuBar from "@/lib/components/MenuBar";
import StickyBox from "react-sticky-box";

import  { useState, useEffect } from 'react';

type Props = {};

const ChordSheet = (props: Props) => {
  const [key, setKey] = useState(Chord.parse("G"));
  const [song] = useState(
    new ChordSheetJS.ChordProParser().parse(`CAPO ON 2nd FRET

    Tu Mera Koyi [G]Na
    Ho[Cadd9]Ke Bhi Kuch [E7]Laage
    Tu [D]Mera Koyi [G]Na
    Ho[Cadd9]Ke Bhi Kuch [E7]Laage
    
    [D]Kiya Re Jo Bhi [Em]Toone Kaise [D]Kiya Re
    [D]Jiya Ko Mere [Em]Baandh Aise [D]Liya Re
    Samajh Ke Bhi [C]Na Samajh Main [D]Saku
    
    Saveron Ka [G]Mere Tu Suraj [Cadd9]Laage
    Tu Mera Koyi [E7]Na
    Hoke Bhi Kuch [D]Laage
    Tu Mera Koyi [G]Na
    
    Hoke Bhi Kuch [Cadd9]Laage
    Tu Mera Koyi [E7]Na
    Hoke Bhi Kuch [D]Laage`)
  );

  const htmlChordSheet = new ChordSheetJS.HtmlTableFormatter().format(song);

  //transpose up
	function trpUp() {
    if(key){
      setKey(key.transposeUp())
    }

		song.lines.forEach(line => {
			line.items.forEach(item => {
        let itemChordPair = item as ChordLyricsPair;
        let chord = Chord.parse(itemChordPair?.chords?.toString());
        if (chord) {
          chord = chord.transposeUp()
          itemChordPair.chords = chord.toString();
          item = itemChordPair;
        }
			})
		})
	}

	//transpose down
	function trpDown() {
    if(key){
      setKey(key.transposeDown())
    }
		song.lines.forEach(line => {
			line.items.forEach(item => {
				let itemChordPair = item as ChordLyricsPair;
        let chord = Chord.parse(itemChordPair?.chords?.toString());
        if (chord) {
          chord = chord.transposeDown()
          itemChordPair.chords = chord.toString();
          item = itemChordPair;
        }
			})
		})
	}

  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

//   return (
//     <Layout
//       pageMetaData={{
//         pageTitle: "Apna Bana Le | thisChord",
//         pageDescription: "TU MERA KOI NA HOKE BHI KUCH LAGE CHORDS",
//       }}
//     >
//       <div>
//         <Image
//           loader={() => 'https://i.ytimg.com/vi/y-B87DoV__8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLBt22Kf-XeLmzdNxiyC-XUmH082cw'}
//           src='https://i.ytimg.com/vi/y-B87DoV__8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLBt22Kf-XeLmzdNxiyC-XUmH082cw'
//           alt='apna-bana-le'
//           // fill={true}
//           // objectFit="contain"
//           width={800}
//           height={450}
//         />
//       </div>
//       <div>
//         <ButtonGroup
//           variant="contained"
//           aria-label="outlined primary button group"
//         >
//           <Button onClick={() => trpUp()}>Up</Button>
//           <Button onClick={() => trpDown()}>Down</Button>
//           <Button style={{ textTransform: "lowercase" }}>b/#</Button>
//         </ButtonGroup>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <pre>
//           <div dangerouslySetInnerHTML={{ __html: htmlChordSheet }} />
//         </pre>
//       </div>
//     </Layout>
//   );
// };

// export default ChordSheet;


const [isSticky, setSticky] = useState(false); 
    const handleScroll = () => { 
        const windowScrollTop = window.scrollY; 
        if (windowScrollTop > 300) { 
        setSticky(true); 
        } 
        else { 
            setSticky(false); 
            } 
    }; 
    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); 
        return () => { 
            window.removeEventListener('scroll', handleScroll); 
            };
        }, []); 


  const theme = useTheme();

  return (



    <>
    <Layout
      pageMetaData={{
        pageTitle: "Apna Bana Le | thisChord",
        pageDescription: "TU MERA KOI NA HOKE BHI KUCH LAGE CHORDS",
      }}
    >
      
      
      <Box className={style.songMain}>
        
        <Grid container >
          <Grid xs={12} md={6} alignSelf={'center'} style={{boxShadow: '0 5px 15px rgb(29 26 26)', borderRadius: '10px'}}>
            <CardMedia
              component="img"              
              image="https://i.ytimg.com/vi/y-B87DoV__8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLBt22Kf-XeLmzdNxiyC-XUmH082cw"
              alt="Live from space album cover" />
          </Grid>
          <Grid xs={12} md={6} >
         < CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Apna bana le
          </Typography>
          <Typography variant="subtitle1" component="div">
            Arijit Singh
          </Typography>
        </CardContent>
        
            < BottomNavigation  className={ isSticky ? style.bottomNavActive : style.bottomNav} >
                <BottomNavigationAction icon={<Button onClick={() => trpUp()}>Up</Button> }  />
                <BottomNavigationAction icon={ <Button onClick={() => trpDown()}>Down</Button>} />
                <BottomNavigationAction icon={<Button style={{ textTransform: "lowercase" }}>b/#</Button>} />
                <BottomNavigationAction icon={<MenuBar />} />
                
            </BottomNavigation>              
          </Grid>
          
        </Grid>
      </Box>
     
        <Box py={3}>

        <Grid container >
          <Grid xs={12} md={6}>
          <div style={{ textAlign: "center" }}>
          <pre>
            <div className={style.songsheet}
            dangerouslySetInnerHTML={{ __html: htmlChordSheet }} />
          </pre>
        </div>

          </Grid>

          <Grid xs={12} md={6}>
            
          <Box className={style.Advertise}>

          </Box>
          </Grid>
        </Grid>
        
        </Box>
    
    </Layout>
      </>
  );
}
export default ChordSheet;
