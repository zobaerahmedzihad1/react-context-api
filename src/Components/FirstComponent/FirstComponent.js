import FirstComponentChild from "../FirstComponentChild/FirstComponentChild";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

const FirstComponent = () => {
  return (
    <div className="first-component">
      <div className="counter-container">
        <h1>First Component</h1>
        <div>
          <button title="Increase">
            <GrFormAdd size={20} />
          </button>
          <h1>Count: </h1>
          <button title="Decrease">
            <AiOutlineMinus size={20} />
          </button>
        </div>
      </div>
      <FirstComponentChild />
    </div>
  );
};

export default FirstComponent;
