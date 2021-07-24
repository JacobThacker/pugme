import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p style={{ color: '#DED8D7' }}>
        <text>Please&nbsp;</text>
        <u style={{ color: '#1B23E5' }}>CLICK&nbsp;</u>
        <Link to="/">here </Link> to GO to the next page.
      </p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
