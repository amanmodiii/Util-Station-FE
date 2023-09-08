import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

function Urlshortner() {
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setResp("");
    setLoading(true);

    axios
      .post("http://localhost:3001/shortenURL", { prompt })
      .then((res) => {
        setLoading(false);
        setResp(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setResp(err.message);
      });
  }

  function handleCopy(link) {
    navigator.clipboard.writeText(link);
  }

  return (
    <div className="App">
      <h2>
        URL <span>Shortener</span>
      </h2>
      <form>
        <input
          type="text"
          id="input"
          placeholder="Enter your lengthy URL"
          value={prompt}
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit} className="btn">
          Go
        </button>
      </form>
      <div className="loader">
        {isLoading && (
          <TailSpin
            height="100"
            width="100"
            color="#d5cea3"
            ariaLabel="tail-spin-loading"
            radius="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      {resp && (
        <div className="response">
          <a href={resp}>{resp}</a>
          <button className="btn" onClick={handleCopy(resp)}>Copy</button>
        </div>
      )}
    </div>
  );
}

export default Urlshortner;
