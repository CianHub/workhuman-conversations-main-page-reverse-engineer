import React from 'react';

import './Content.css';
import ContentColumn from './ContentColumn/ContentColumn';

const Content = (props) => {
  return (
    <main className="app-content">
      <ContentColumn title={'Feedback'} color={'#298bbe'} />
      <ContentColumn title={'Check-ins'} color={'#b65082'} />
      <ContentColumn title={'Priorities'} color={'#33b298'} />
    </main>
  );
};

Content.propTypes = {};

export default Content;
