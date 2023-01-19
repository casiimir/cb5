import { useState } from "react";
import NewMessage from "./components/newMessage";
import MessagesList from "./components/messagesList";
import FriendsList from "./components/friendsList";
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";
import FriendContent from "./components/friendContent";
import "./App.css";

function App() {
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("NewMessage");

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("NewMessage");
  };

  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
        />
      </div>
      <div className="mainSection">
        {isModalEnabled && (
          <Modal setModalEnabled={setModalEnabled}>
            {modalContent === "NewMessage" ? (
              <NewMessage setModalEnabled={setModalEnabled} />
            ) : (
              <FriendContent friendId={modalContent} />
            )}
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />
        <MessagesList nPost={"full"} filterSearch={filterState} />
      </div>
      <div className="popularSection">
        <MessagesList nPost={5} />
      </div>
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>
  );
}

export default App;
