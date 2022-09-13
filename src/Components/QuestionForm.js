import React, { useEffect, useRef, useState } from "react";

function QuestionForm({ data, number, increaseNumber }) {
  const Ref = useRef(null);
  const [selectOption, setSelectOption] = useState("");
  const [timer, setTimer] = useState("??:??:??");
  const onSelect = (e) => {
    setSelectOption(e.target.value ? e.target.value : "wrong");
  };
  function handleSubmit(e) {
    e.preventDefault();
    let correctAnswer;
    if (data.answer === selectOption) {
      correctAnswer = true;
    } else {
      correctAnswer = false;
    }

    increaseNumber(correctAnswer);
    clearTimer(getDeadTime());
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("timer started");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + data.time+1);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if (timer === "00:00:00") {
      increaseNumber(false);
      clearTimer(getDeadTime());
    }
  }, [timer]);

  return (
    <form className="form-group card" onSubmit={handleSubmit}>
      <div className="card" style={{ width: "18rem", alignSelf: "center" }}>
        <div className="card-body">
          <h3 className="card-title">{timer}</h3>
          <p class="card-text mt-3">Time is precious</p>

        </div>
      </div>

      <h5 className="card-title mt-5">
        {number + 1}. {data.question}
      </h5>
      <select
        multiple
        className="form-control list-group mt-3"
        id="exampleFormControlSelect"
        onChange={onSelect}
        required
        style={{ width: "40rem", alignSelf: "center" }}
        
      >
        {data.option.map((i) => {
          return (
            <option className="list-group-item" value={i}>
              {i}
            </option>
          );
        })}
      </select>
      <button type="submit" className="btn btn-outline-primary mt-4" style={{ width: "18rem", alignSelf: "center" }}>
        Submit Answer
      </button>
    </form>
  );
}

export default QuestionForm;
