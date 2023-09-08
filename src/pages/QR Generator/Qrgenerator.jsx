import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import html2canvas from "html2canvas";
import { BASE_URL } from "../../services/port";

function Qrgenerator() {
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState();
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setResp();
    setLoading(true);

    axios
      .post(`${BASE_URL}/generateQR`, { prompt })
      .then((res) => {
        setLoading(false);
        setResp(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setResp(err.message);
      });
  }
  const downloadImage = () => {
    const svgContainer = document.getElementById("response");

    html2canvas(svgContainer).then(function (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = "qr.png";
      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    });
  };

  return (
    <div className="App">
      <h2>
        QR <span>Generator</span>
      </h2>
      <form>
        <input
          type="text"
          id="input"
          placeholder="Insert the Link"
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
      <div onClick={downloadImage}>
        <div id="response" className="response" dangerouslySetInnerHTML={{ __html: resp }} />
      </div>
    </div>
  );
}

export default Qrgenerator;
