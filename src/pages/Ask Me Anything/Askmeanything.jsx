import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

function Askmeanything() {
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setResp("");
    setLoading(true);

    axios
      .post("http://localhost:3001/chat", { prompt })
      .then((res) => {
        setLoading(false);
        setResp(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setResp(err.message);
      });
  }

  return (
    <div className="App">
      <h2>
        Ask Me <span>Anything</span>
      </h2>
      <form>
        <input
          type="text"
          id="input"
          placeholder="Ask me a question"
          value={prompt}
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
        <br />
        <button className="btn" onClick={handleSubmit}>Go</button>
      </form>
      <div className="loader">
        {isLoading && (
          <TailSpin
            height="100"
            width="100"
            color="#eeeded"
            ariaLabel="tail-spin-loading"
            radius="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      <div className="response">{resp}</div>
    </div>
  );
}

export default Askmeanything;
