import Layout from "@/lib/components/Layout";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ChordSheetJS, { Chord, ChordLyricsPair } from "chordsheetjs";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <Layout
      pageMetaData={{
        pageTitle: "Apna Bana Le | thisChord",
        pageDescription: "TU MERA KOI NA HOKE BHI KUCH LAGE CHORDS",
      }}
    >
      <div>
        <Image
          loader={() => 'https://i.ytimg.com/vi/y-B87DoV__8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLBt22Kf-XeLmzdNxiyC-XUmH082cw'}
          src='https://i.ytimg.com/vi/y-B87DoV__8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLBt22Kf-XeLmzdNxiyC-XUmH082cw'
          alt='apna-bana-le'
          // fill={true}
          // objectFit="contain"
          width={800}
          height={450}
        />
      </div>
      <div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => trpUp()}>Up</Button>
          <Button onClick={() => trpDown()}>Down</Button>
          <Button style={{ textTransform: "lowercase" }}>b/#</Button>
        </ButtonGroup>
      </div>
      <div style={{ textAlign: "center" }}>
        <pre>
          <div dangerouslySetInnerHTML={{ __html: htmlChordSheet }} />
        </pre>
      </div>
    </Layout>
  );
};

export default ChordSheet;
