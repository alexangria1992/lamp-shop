import React from "react";
import "./Control.scss";

function Control(props: { step: number; setStep: React.Dispatch<number> }) {
  const { step, setStep } = props;

  return (
    <div className="Control">
      <ul>
        <li
          onClick={() => {
            setStep(1);
          }}
        >
          <img src="Lamp-1.png" alt="" />
        </li>
        <li
          onClick={() => {
            setStep(2);
          }}
        >
          <img src="Lamp-2.png" alt="" />
        </li>
        <li
          onClick={() => {
            setStep(3);
          }}
        >
          <img src="Lamp-3.png" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Control;
