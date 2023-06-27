import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type CardSliderProps = {
  items: JSX.Element[];
}


export default function CardsSlider({ items }: CardSliderProps) {

  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 4 },
};

  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2500}
        
        animationType="slide"
        infinite
        touchTracking={false}
        disableButtonsControls
        items={items}
        responsive={responsive}
      />
    </>
  );
}
