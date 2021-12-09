import "./style.css";

const Icon = ({ texticon1, texticon2}) => (
  <div>

    <h2>{texticon1}</h2>

    <div className="icon">
      <div className="iconcolor"></div>
      <div className="iconcolor2"></div>
      <div className="iconcolor3"></div>
      <div className="iconcolor4"></div>
    </div>

    <h2>{texticon2}</h2>

    <div className="iconsize">
      <div className="iconsize1">S</div>
      <div className="iconsize2">M</div>
      <div className="iconsize3">L</div>
    </div>
    
  </div>
);

export default Icon;
