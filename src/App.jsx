import "./App.css";
import {
  incNumber,
  decNumber,
  div,
  mult,
  mclear,
  dclear,
} from "./actions/Index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Todo from "./Todo";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({

});
function App() {
  const myState = useSelector((state) => state.changeNumber);
  const multState = useSelector((state) => state.multNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="theory" data-aos="fade-in" data-aos-offset="600" data-aos-delay="200">
        <h1>Redux</h1>
        <p>
          Redux is a pattern and library for managing and updating opplication
          state , using event called "actions". It serves as a centralized store
          for state that needs to be used across your entire application with
          rules ensuring that the state can only be update in predictable
          fashion.
        </p>
        <h2>Redux main topics </h2>
        <ol>
          <li>
            <h3>Action</h3>
            <p>What to do </p>
          </li>
          <li>
            <h3>Reducer</h3>
            <p>How to do </p>
          </li>
          <li>
            <h3>Store</h3>
            <p>Object which holds the state of application.</p>
          </li>
        </ol>
      <h1>Projects</h1>
      </div>
      <div className="container">
        <h2>Increment/Decrement counter</h2>
        <h4>Using React and Redux</h4>
        <div className="quantity" data-aos="slide-left" data-aos-delay="200">
          <a
            className="quantity_minus"
            title="decrement"
            onClick={() => dispatch(decNumber(5))}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
          />
          <a
            className="quantity_plus"
            title="increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </a>
        </div>
        <button className="btn" onClick={() => dispatch(mclear(0))} data-aos="slide-right" data-aos-delay="200">
          Clear
        </button>
      </div>
      <div className="container">
        <h2>Multiply/Devide counter</h2>
        <h4>Using React and Redux</h4>
        <div className="quantity" data-aos="slide-down" data-aos-delay="200">
          <a
            className="quantity_minus"
            title="decrement"
            onClick={() => dispatch(div(5))}
          >
            <span>/</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={multState}
          />
          <a
            className="quantity_plus"
            title="increment"
            onClick={() => dispatch(mult(5))}
          >
            <span>*</span>
          </a>
        </div>
        <button className="btn" onClick={() => dispatch(dclear(5))} data-aos="slide-up" data-aos-delay="200">
          Clear
        </button>
      </div>
      <Todo />
    </>
  );
}

export default App;
