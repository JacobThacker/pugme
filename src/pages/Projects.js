import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Pugs"
    description="A selection of pugs."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Pugs</Link></h2>
          <p>A selection of pugs</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          // key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
