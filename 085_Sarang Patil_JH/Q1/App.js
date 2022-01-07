import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const headerApp = "My Chat App";
  const studentName = "Sarang Patil";
  const studentId = "085_JH";
  const [inputchat, setinputchat] = useState("");
  // const handleInput = (h) => {
  //   const msg = h.target.value;
  //   setinputchat(msg);
  // }

  const sendMsg = async () => {
    if (msg === "") {
      alert("I cannot send empty msg....")
    }
    const url = `http://localhost:3000/send`
    const data = {
      message: message
    }

    await axios.post(url, data)

    setMessage("")

    alert("Mesaage Sent")
  }

  const [message, setMessage] = useState("")
  const msghandler = (event) => {
    setMessage(event.target.value)
  }
  return (
    <div>
      <div className="row bg-secondary"></div>
      <div className="col fs-1">{headerApp}</div>
      <div className="col fs-4"> by {studentName} {studentId}</div>
      <div>
        <div className="row">
          <div className="col-10 p-2 h-50">
            <input
              type="text"
              name="message"
              id="msg"
              placeholder="Lets chat here...."
              className="form-control w-100 p-2  "
            />
          </div>

          <div className="col-2 p-1">
            <input
              type="button"
              value="Send"
              className="from-control p-3 btn-outline-primary border rounded "
              onclick={sendMsg}
            />
          </div>
        </div>

        <div className="row bg-primary">
          <div className="col-12 p-3 h-20">
            <input type=""
              className="form-control w-100 p-3 h-25"
            />
          </div>
        </div>
      </div>
    </div>
  )

}
