import React, { useContext } from 'react';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';

import './Content.css';
import ContentColumn from './ContentColumn/ContentColumn';

const Content = (props) => {
  const [{ currentCharacter }] = useContext(CharacterContext);
  const { priorities, feedback, checkIn } = currentCharacter.timeline;

  return (
    <main className="app-content">
      <ContentColumn title={'Feedback'} color={'#298bbe'} data={feedback} />
      <ContentColumn title={'Check-ins'} color={'#b65082'} data={checkIn} />
      <ContentColumn title={'Priorities'} color={'#33b298'} data={priorities} />
    </main>
  );
};

Content.propTypes = {};

export default Content;
