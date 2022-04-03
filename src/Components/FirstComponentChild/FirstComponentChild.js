import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { CountContext } from "../../App";

const FirstComponentChild = () => {

  const [count, setCount] = useContext(CountContext);

  return (
    <div className="first-component-child">
      <div className="counter-container">
        <h1>First Component Child</h1>
        <div>
          <button title="Increase" onClick={()=> setCount(count + 1)}>
            <GrFormAdd size={20} />
          </button>
          <h1>Count: {count} </h1>
          <button title="Decrease" onClick={()=> setCount(count -1)}>
            <AiOutlineMinus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstComponentChild;
