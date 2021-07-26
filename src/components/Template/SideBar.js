import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/KingPug.jpeg`} alt="" />
      </Link>
      <header>
        <h3>Welcome to PugMe.co.nz</h3>
        <p>New Zealands Premier Bug Website</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Welcome to PugMe.co.nz we aim to connect people
        with pictures of Pugs and Pug paraphernalia
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/contact') ? <Link to="/contacts" className="button">Contact</Link> : <Link to="/" className="button">Home</Link>}
        </li>
      </ul>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/upload') ? <Link to="/upload" className="button">Upload</Link> : <Link to="/upload" className="button">Home</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jake Thacker 2021.</p>
    </section>
  </section>
);

export default SideBar;
