import React, { useState } from "react";

function QuestionForm({ data, number, increaseNumber }) {
  const [selectOption, setSelectOption] = useState("");
  const onSelect = (e) => {
    setSelectOption(e.target.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    let correctAnswer;
    if (data.answer === selectOption) {
      correctAnswer = true;
    }
    
    increaseNumber(correctAnswer);
  }

  return (
    <form className="form-group card" onSubmit={handleSubmit}>
      <h5 className="card-title">
        {number + 1}. {data.question}
      </h5>
      <select
        multiple
        className="form-control list-group list-group-flush"
        id="exampleFormControlSelect2"
        onChange={onSelect}
      >
        {data.option.map((i) => {
          return (
            <option className="list-group-item" value={i}>
              {i}
            </option>
          );
        })}
      </select>
      <button type="submit" className="btn btn-outline-primary">
        Submit Answer
      </button>
    </form>
  );
}

export default QuestionForm;
