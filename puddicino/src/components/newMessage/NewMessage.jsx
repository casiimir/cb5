import { useState } from "react";
import "./index.css";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
  };

  return (
    <div className="NewMessage">
      {console.log(messageText)}
      <form onSubmit={onSubmit}>
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="A cosa non stai pensando?"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
