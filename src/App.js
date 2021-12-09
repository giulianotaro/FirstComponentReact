import "./App.css";
import Textblock from "./components/TextBlock";
import Cardimg from "./components/CardImg";
import Button from "./components/Button";
import Icon from "./components/colorsandsize";

function App() {
  return (
    <div className="card">

      <div className="card-img">
        <Cardimg src="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />
      </div>

      <div className="card-text">

        <Textblock
          title1="Backpack"
          content="34$"
          content1="With a concept designed to be easy,
       to understand, RAINS bridge the gap between
       geography and lifestyle. "
        />


        <Icon texticon1="Colors" texticon2="Size" className="iconcolor" className="iconsize"  />

        

        <Button text="Add to cart" />
      </div>
    </div>
  );
}

export default App;
