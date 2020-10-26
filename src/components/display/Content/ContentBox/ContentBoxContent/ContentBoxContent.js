import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CharacterContext } from '../../../../../state/CharacterState/CharacterContext';
import './ContentBoxContent.css';

const ContentBoxContent = ({ dataItem, children }) => {
  const { characters } = useContext(CharacterContext)[0];
  const char = characters?.find((char) => char.id === dataItem.authorId);

  return children(dataItem, char);
};

ContentBoxContent.propTypes = {
  dataItem: PropTypes.object.isRequired,
  children: PropTypes.func,
};

export default ContentBoxContent;
