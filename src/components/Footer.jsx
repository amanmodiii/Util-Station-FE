import 'boxicons';
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">© Aman Modi</div>
      <div className="footer-links">
        <a href="https://github.com/amanmodiii">
          <box-icon type="logo" color="#E9EAEC" name="github" className="boxicon"></box-icon>
        </a>
        <a href="https://www.linkedin.com/in/amanmodiii/">
          <box-icon type="logo" color="#E9EAEC" name="linkedin" className="boxicon"></box-icon>
        </a>
      </div>
    </div>
  );
}

export default Footer