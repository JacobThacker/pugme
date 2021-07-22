import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import data from '../data/projects';
import Cell from '../components/Projects/Cell';

const Index = () => (
  <Main
    description={'Never trust a computer you can’t throw out a window'
    + ''}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">PugMe.co.nz, we make dreams come true. </Link></h2>
          <p>
            We’re a local, boutique Website that focuses on
            creating a wonderful environment for people to learn about Pugs.
          </p>
        </div>
      </header>
      <p> The pug is a breed of dog with physically distinctive features of a wrinkly,
        short-muzzled face, and curled tail. The breed has a fine,
        glossy coat that comes in a variety of colors,
        most often light brown or black, and a compact, square body with well-developed muscles.
      </p>
      <p>
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </p>
    </article>
  </Main>
);

export default Index;
