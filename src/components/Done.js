import { Link } from "react-router-dom";
import React, { useState } from "react";

const Done = () => {
  const [state, setState] = useState({ fName: "", lName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const webof = () => {
    setState((prevState) => ({
      ...prevState,
      fName: "your updated value here",
    }));
  };

  return (
    <div className="done">
      {state.fName}
      {state.lName}
      <input
        value={state.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />

      <input type="button" value="" onClick={() => webof()} />
      <Link to="/">
        <button>Regresar</button>
      </Link>
    </div>
  );
};

export default Done;
