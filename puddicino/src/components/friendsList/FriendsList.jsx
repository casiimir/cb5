import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import Filter from "../filter";
import "./index.css";

const FriendsList = ({ setModalContent, setModalEnabled }) => {
  const [filterState, setFilterState] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    // GET("users").then(({ users }) => setFriendsList(users));
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      <Filter setFilterState={setFilterState} />
      {/* {friendsList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))} */}
      <div className="FriendsList__items">
        {friendsList
          .filter((friend) => friend.firstName.includes(filterState))
          .map((friend) => (
            <Friend
              data={friend}
              setModalContent={setModalContent}
              setModalEnabled={setModalEnabled}
              key={friend.id}
            />
          ))}
      </div>
    </div>
  );
};

export default FriendsList;
