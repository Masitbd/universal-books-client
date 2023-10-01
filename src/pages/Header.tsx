import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Header = () => {
  return (
   <div className=''>
     <Carousel autoPlay={true} showThumbs={false} centerMode={true} centerSlidePercentage={50}  
     showArrows={true} infiniteLoop={true}
     >
      <div className='h-80'>
        <img  src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3MlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  alt="Image 1" />
     </div>
      <div>
        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  alt="Image 2" />
     </div>
      <div>
        <img src="https://images.unsplash.com/photo-1612179426608-3330c558cb70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image 3" />
      </div>
    </Carousel>
   </div>
  );
}

export default Header