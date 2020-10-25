import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Profile from '../../../Profile/Profile';
import { CharacterContext } from '../../../../../state/CharacterState/CharacterContext';
import './ContentBoxContent.css';

const ContentBoxContent = ({ type, dataItem }) => {
  const { characters } = useContext(CharacterContext)[0];
  console.log(characters);

  const char = characters?.find((char) => char.id === dataItem.authorId);

  if (type === 'Check-ins') {
    return (
      <div className="app-content-box">
        <div className="app-content-box-profile">
          <Profile character={char} subtitle={'Check-ins'} />
        </div>
        <span className="app-content-box-title">{dataItem.title}</span>
        <p className="app-content-box-message">{dataItem.message}</p>
        <p className="app-content-box-date">{dataItem.age}</p>
      </div>
    );
  }
  if (type === 'Feedback') {
    return (
      <div className="app-content-box">
        <div className="app-content-box-profile">
          <Profile character={char} subtitle={'Feedback'} />
        </div>
        <p className="app-content-box-message">{dataItem.message}</p>
        <p className="app-content-box-date">{dataItem.age}</p>
      </div>
    );
  }
  if (type === 'Priorities') {
    return (
      <div className="app-content-box">
        {dataItem.type === 'active' ? (
          <p className="app-content-box-message">My active priorities</p>
        ) : (
          <p className="app-content-box-message">My closed priorities</p>
        )}
        <ul className="app-content-box-list">
          {dataItem.tasks.map((task) => (
            <li>
              <input type="checkbox" checked={dataItem.type !== 'active'} />
              {task}
            </li>
          ))}
        </ul>
        <br />
      </div>
    );
  }
};

ContentBoxContent.propTypes = { type: PropTypes.string.isRequired };

export default ContentBoxContent;
