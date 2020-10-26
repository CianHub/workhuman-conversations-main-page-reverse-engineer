import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import './ContentBoxHeader.css';

import { useTimelineItem } from '../../../../../hooks/useTimelineItem';
import { CharacterContext } from '../../../../../state/CharacterState/CharacterContext';
import { actions } from '../../../../../state/CharacterState/CharacterReducer';

const ContentBoxHeader = ({ title, color }) => {
  const [{ characters, currentCharacter }, dispatch] = useContext(
    CharacterContext
  );

  const getType = () => {
    if (title === 'Feedback') {
      return 'feedback';
    }
    if (title === 'Priorities') {
      return 'priorities';
    }
    if (title === 'Check-ins') {
      return 'checkIn';
    }
  };

  const [newCurrentChar, newChars] = useTimelineItem(
    getType(),
    characters,
    currentCharacter
  );

  const handleNewTimelineItem = () => {
    dispatch({ type: actions.addCharacter, payload: newChars });
    dispatch({ type: actions.changeCurrentCharacter, payload: newCurrentChar });
  };

  return (
    <section
      className="app-content-box-header"
      style={{ backgroundColor: color }}
    >
      <h4 className="app-content-box-header-title">{title}</h4>
      <div className="app-content-box-header-right-side">
        <div className="app-content-box-header-bar" />
        <div
          className="app-content-box-header-buttons"
          onClick={() => handleNewTimelineItem()}
        >
          <AddCircleIcon />
        </div>
      </div>
    </section>
  );
};

ContentBoxHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ContentBoxHeader;
