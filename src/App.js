import React from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { Chat } from "./Message";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import db from "./firebase";
import { useState, useEffect } from "react";

function App() {
  const [Toggle, Settoggle] = useState("");
  const [Messages, SetMessages] = useState([]);
  const [Username, ChangeUsername] = useState("");
  const submitting = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "message");
    const payload = {
      username: Username,
      text: Toggle,
      time: serverTimestamp(),
    };
    await addDoc(collectionRef, payload);
    Settoggle("");
  };
  function Change(e) {
    Settoggle(e.target.value);
  }

  useEffect(() => {
    onSnapshot(
      query(collection(db, "message"), orderBy("time", "desc")),
      (snap) => {
        SetMessages(snap.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  useEffect(() => {
    ChangeUsername(prompt("username 👱‍♂️ "));
  }, []);
  return (
    <div className="App">
      <h1>FaceBook Messenger</h1>
      <h2>Welcome {Username} 👋</h2>
      <form>
        <FormControl>
          <InputLabel>Type Here</InputLabel>
          <Input value={Toggle} onChange={Change} />
          <Button
            type="submit"
            onClick={submitting}
            variant="contained"
            color="primary"
            disabled={!Toggle}
          >
            Send Message
          </Button>
        </FormControl>
        <FlipMove>
          {Messages.map((t) => {
            return <Chat val={t.text} username={t.username} use={Username} />;
          })}
        </FlipMove>
      </form>
    </div>
  );
}

export default App;
