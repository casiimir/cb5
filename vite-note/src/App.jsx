import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import AddNote from "./components/addNote";
import NoteContent from "./components/noteContent";

import { createContext } from "react";
import { useReducer } from "react";
import Login from "./components/login";

const initialState = {
  noteList: [
    {
      id: 1,
      title: "Oggi è Mercoledì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
    {
      id: 2,
      title: "Domani è Giovedì",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
  ],
  user: {
    username: localStorage.getItem("Note-app-username"),
  },
};

const ApplicationCtx = createContext(initialState);

const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case "SET_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <main>
              <AddNote />
              <NoteContent />
            </main>
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export { ApplicationCtx };
export default App;
