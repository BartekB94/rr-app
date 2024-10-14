import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounterAction } from "../../actions/counter";

function Form() {
  const counter = useSelector((state) => state.counter);
  const [inputCounter, setInputCounter] = useState(counter);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCounterAction(Number(inputCounter)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={({ target }) => setInputCounter(target.value)}
          value={inputCounter}
        />
        <input type="submit" value="zapisz" />
      </div>
    </form>
  );
}

export default Form;
