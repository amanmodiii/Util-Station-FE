import React, { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import { BASE_URL } from "../../services/port";

function Textsummarizer() {
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isResp, setIsResp] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setResp("");
    setLoading(true);

    axios
      .post(`${BASE_URL}/summarize`, { prompt })
      .then((res) => {
        setLoading(false);
        setResp(res.data);
        setIsResp(true);
      })
      .catch((err) => {
        console.log(err.message);
        setResp(err.message);
      });
  }

  return (
    <div className="App">
      <h2>
        Text <span>Summarizer</span>
      </h2>
      <form>
        <textarea
          type="text"
          id="input"
          placeholder="Enter the article/document"
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
          <Rings
            height="100"
            width="100"
            color="#eeeded"
            ariaLabel="rings-loading"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      {isResp && <div className="response">{resp}</div>}
    </div>
  );
}

export default Textsummarizer;
