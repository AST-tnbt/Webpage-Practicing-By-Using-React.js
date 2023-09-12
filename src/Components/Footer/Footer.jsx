import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="content-item">
        <span className="content__title">Dev.Point Design, Inc.</span>
        <span className="content__text">
          &copy; 2022 Dev. Point. All rights reserved. <br />
          Designed by Robirurk.
        </span>
      </div>
      <div className="content-item">
        <span className="content__text">
          <a href="mailto: someone@gmail.com">someone@gmail.com</a>
        </span>
        <span className="content__text">+44 986 689 009</span>
      </div>
      <div className="content-item">
        <span className="content__title">Projects</span>
        <ul className="list-item">
          <li>
            <a className="content__text" href="#">
              About
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Service
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div className="content-item">
        <span className="content__title">News</span>
        <ul className="list-item">
          <li>
            <a className="content__text" href="#">
              Events
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Legals
            </a>
          </li>
        </ul>
      </div>
      <div className="content-item">
        <span className="content__title">Social Links</span>
        <ul className="list-item">
          <li>
            <a className="content__text" href="#">
              Facebook
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="content__text" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
