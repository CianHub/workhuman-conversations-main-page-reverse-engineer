import React from 'react';

import PropTypes from 'prop-types';
import ContentBoxContent from '../ContentBox/ContentBoxContent/ContentBoxContent';
import ContentBoxHeader from '../ContentBox/ContentBoxHeader/ContentBoxHeader';

import './ContentColumn.css';
import Profile from '../../Profile/Profile';

const FeedBackContentBox = ({ char, dataItem }) => (
  <div className="app-content-box">
    <div className="app-content-box-profile">
      <Profile character={char} subtitle={'Feedback'} />
    </div>
    <p className="app-content-box-message">{dataItem.message}</p>
    <p className="app-content-box-date">{dataItem.age}</p>
  </div>
);

const CheckInContentBox = ({ char, dataItem }) => (
  <div className="app-content-box">
    <div className="app-content-box-profile">
      <Profile character={char} subtitle={'Check-ins'} />
    </div>
    <span className="app-content-box-title">{dataItem.title}</span>
    <p className="app-content-box-message">{dataItem.message}</p>
    <p className="app-content-box-date">{dataItem.age}</p>
  </div>
);

const PrioritiesContentBox = ({ dataItem }) => (
  <div className="app-content-box">
    {dataItem.type === 'active' ? (
      <p className="app-content-box-message">My active priorities</p>
    ) : (
      <p className="app-content-box-message">My closed priorities</p>
    )}
    <ul className="app-content-box-list">
      {dataItem.tasks.map((task, idx) => (
        <li key={task + idx}>
          <input
            type="checkbox"
            checked={dataItem.type !== 'active'}
            readOnly
          />
          {task}
        </li>
      ))}
    </ul>
    <br />
  </div>
);

const ContentColumn = ({ title, color, data }) => {
  const handleContentBox = (dataItem, char) => {
    if (title === 'Feedback')
      return <FeedBackContentBox char={char} dataItem={dataItem} />;
    if (title === 'Priorities')
      return <PrioritiesContentBox dataItem={dataItem} />;
    if (title === 'Check-ins')
      return <CheckInContentBox char={char} dataItem={dataItem} />;
  };

  return (
    <div className="app-content-column">
      <ContentBoxHeader title={title} color={color} />
      {data.map((item, idx) => (
        <ContentBoxContent dataItem={item} key={title + idx}>
          {(dataItem, char) => handleContentBox(dataItem, char)}
        </ContentBoxContent>
      ))}
    </div>
  );
};

ContentColumn.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default ContentColumn;
