import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { BASE_URL } from "../../services/port";

function Headlinegenerator() {
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setResp("");
    setLoading(true);

    axios
      .post(`${BASE_URL}/generateheadline`, { prompt })
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
        Headline <span>Generator</span>
      </h2>
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
      <div className="response">{resp}</div>
      <form>
        <textarea
          type="text"
          id="input"
          placeholder="Enter the article"
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
    </div>
  );
}

export default Headlinegenerator;
