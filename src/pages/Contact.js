import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>At Pug.co.nz quality is important to us.
        </p>
        <p>
          See something you don&apos;&apos;t agree with?
        </p>
        <p>
          Note is down and let us know!
        </p>
        <EmailLink />
        <p>(TODO:// insert Company Phone Number)</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
