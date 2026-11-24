import Intro from "../../components/sections/Intro/Intro";
import News from "../../components/sections/News/News";
function NewsSections() {

  return (
    <>
      <Intro
        bg={"https://images.pexels.com/photos/25182965/pexels-photo-25182965/free-photo-of-flowers-in-vase-on-table.jpeg"}
        id="news-intro"
        posY={"50%"}
        headline="News"
        description=
        "Fresh trends and inspiration: <br/> the latest news from the world of furniture"

      />
      <News />
    </>
  );
}
export default NewsSections;
