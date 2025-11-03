import React from 'react'
import "./footer.css"
import AboutImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
<img
  src={AboutImg}
  alt="about Moataz Mhamdi"
  style={{ height: '9.5em', verticalAlign: 'center' , marginLeft: '25rem'
  }}
/>        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">Journy</a>
          </li>

        </ul>
        <div className="footer__social">

          <a href="https://github.com/MoatazMhamdi" className="footer__social-link" target="_blank">
            <i class="uil uil-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/moatazmhamdi/" className="footer__social-link" target="_blank">
            <i class="ui uil-linkedin"></i>
          </a>

        

        </div>

      </div>
    </footer>
  )
}

export default Footer