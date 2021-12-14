import "./App.css";
import Textblock from "./components/TextBlock";

import { data } from "./data";




function App() {
  return (
    <div className="card">
      <div className="card-text">
        {data.products.map((book) => (
          <Textblock
            key={book.id}
            name={book.name}
            price={book.price}
            description={book.description}
            src={book.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
