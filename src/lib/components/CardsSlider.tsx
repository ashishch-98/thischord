import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type CardSliderProps = {
  items: JSX.Element[];
}


export default function CardsSlider({ items }: CardSliderProps) {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
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
