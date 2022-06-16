import "../src/App.css";
import { useState } from "react";

function App() {
  const [login, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [inputClass, setInputClass] = useState("no_Error");
  const [wasInput, setWasInput] = useState(false);
  const [textClass, setTextClass] = useState("message_class");

  const handleClick = () => {
    console.log(login);
    setValue("");
    setMessage("Cообщение успешно отправлено");
    setIsActive(true);
    setTextClass("message_class");
  };

  const blurHandler = (e) => {
    if (e.target.name === "input") {
      setWasInput(true);
      if (login === "") {
        setInputClass("is_Error");
        setMessage("Поле ввода не должно быть пустым");
        setTextClass("error_text");
      } else if (login !== "") {
        setMessage("")
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setIsActive(true);
    }
    if (e.target.value) {
      setIsActive(false);
      setInputClass("no_Error");
      setWasInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="conteiner">
          <input
            name="input"
            className={inputClass}
            type="text"
            value={login}
            onChange={handleChange}
            onBlur={(e) => blurHandler(e)}
          />
          <button
            type="submit"
            onClick={handleClick}
            disabled={isActive}
            className="button"
          >
            Отправить
          </button>
          {wasInput && <p className={textClass}>{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default App;
