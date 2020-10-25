import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './Content.css';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';
import ContentColumn from './ContentColumn/ContentColumn';

const Content = (props) => {
  const characters = useContext(CharacterContext)[0];

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
