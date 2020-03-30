import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTrashAlt,
  FaEllipsisH,
  FaMailBulk,
  FaLinkedin
} from "react-icons/fa";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  let currentDate = moment().format("dddd, MMMM Do YYYY");

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      dataHandler();
    }
  };

  const dataHandler = () => {
    if (input === "") return;
    setData([
      ...data,
      {
        id: Math.round(Math.random().toString() * 1000),
        value: input,
        checked: false
      }
    ]);
    setInput("");
  };

  const removeHandler = id => {
    setData(data => {
      return data.filter(value => value.id !== id);
    });
  };

  const checkValue = id => {
    setData(
      data.map(value => {
        if (value.id === id) value.checked = !value.checked;
        return value;
      })
    );
  };

  return (
    <div className="card">
      <div className="screen">
        <div className="container header">
          <div className="row">
            <div className="col-5 info">
              <p className="time">{currentDate}</p>
              <p className="task">{data.length} Tasks</p>
            </div>
            <div className="col-7 social text-right">
              <a href="mailto:reza.mas88@gmail.com">
                <FaMailBulk className="ico" />
              </a>
              <a href="https://www.linkedin.com/in/rezamas/">
                <FaLinkedin className="ico" />
              </a>
            </div>
          </div>
        </div>
        <div className="container inputbox">
          <div className="row">
            <div className="col-12">
              <div class="form-inline">
                <input
                  type="text"
                  placeholder="Add new task..."
                  className="inputvalue"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKeyDownHandler}
                />
                <button
                  type="button"
                  class="btn btn-submit"
                  onClick={e => dataHandler()}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container result">
          <div className="row">
            <div className="col-12">
              {data.map(item => (
                <li className="item">
                  {item.checked ? (
                    <FaCheckCircle
                      className="FaCheckCircle"
                      style={{ color: "#009432" }}
                      onClick={e => checkValue(item.id)}
                    />
                  ) : (
                    <FaEllipsisH
                      className="FaCheckCircle"
                      onClick={e => checkValue(item.id)}
                    />
                  )}
                  {item.value}
                  <FaTrashAlt
                    className="FaTrashAlt"
                    onClick={e => removeHandler(item.id)}
                  />
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
