import bg from "../../assets/img_21.webp";
import Intro from "../../components/sections/Intro/Intro";
import Reviews from "../../components/sections/Reviews/Reviews";
function ReviewsSections() {
  return (
    <>
      <Intro
        bg={bg}
        id="reviews-intro"
        posY={"70%"}
   
          headline="Reviews"
          description="Our customers' feedback is important to us"
  
      />
   <Reviews/>
    </>
  );
}
export default ReviewsSections;
