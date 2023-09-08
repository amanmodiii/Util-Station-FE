import React from 'react'

function Home() {
  return (
    <div className="App">
      <section className="hero" id="hero">
        <div className="hero-text">
          <h3>Welcome to</h3>
          <h1>
            UTIL <span>STATION</span>
          </h1>
          <h6>
            The<span> junction</span> for your Utilities...
          </h6>
        </div>
        <a className="btn" href="#utilities">
          Explore{"   "}↓
        </a>
      </section>


      <section className="utilities" id="utilities">
      <h2><span>Utilities</span> Available</h2>
        <div class="utility-container">
          <div className="card">
            <div class="card-layer">
              <h4>Ask Me Anything</h4>
              <p>Utility app to solve your doubts</p>
              <a href="/askmeanything" className="btn">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div class="card-layer">
              <h4>Text Summarizer</h4>
              <p>Utility app to summarize and article or document</p>
              <a href="/textsummarizer" className="btn">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div class="card-layer">
              <h4>Headline Generator</h4>
              <p>Utility app to generate headings for articles</p>
              <a href="/headlinegenerator" className="btn">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div class="card-layer">
              <h4>URL Shortener</h4>
              <p>Utility app to get rid of the lengthy URLS</p>
              <a href="/urlshortener" className="btn">
                Visit
              </a>
            </div>
          </div>
          <div className="card">
            <div class="card-layer">
              <h4>QR Generator</h4>
              <p>Utility app to create QR codes for any link</p>
              <a href="/qrgenerator" className="btn">
                Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home