import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type Props = {}

const SlickSlider = (props: Props) => {
  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

const items = [
  <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" key={1} onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg?auto=compress&cs=tinysrgb&w=600" key={2}onDragStart={handleDragStart} role="presentation" />,
  <img src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=600" key={3} onDragStart={handleDragStart} role="presentation" />,
];


  return (
    <AliceCarousel  
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="slide"
    infinite
    touchTracking={false}
    disableButtonsControls
    items={items} />
  )
}

export default SlickSlider


// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// type Props = {}

// const SlickSlider = (props: Props) => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <>
//       <Slider {...settings}>
//           <div>
//             <Image
//               loader={() => "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
//               src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//               alt="guitar"
//               width={600}
//               height={400}
//             />
//           </div>
//           <div>
//             <Image
//               loader={() => "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}
//               src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
//               alt="guitar"
//               width={600}
//               height={400}
//             />
//           </div>
//         </Slider>
//     </>
//   )
// }

// export default SlickSlider