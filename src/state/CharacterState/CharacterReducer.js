export const actions = {
  addCharacter: 'ADD_CHARACTER',
  changeCurrentCharacter: 'CHANGE_CURRENT_CHARACTER',
};

export const initialState = {
  characters: [],
  currentCharacter: {
    id: 0,
    name: 'Chewbacca',
    img:
      'https://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg',
  },
};

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return { ...state, characters: action.payload };
    case 'CHANGE_CURRENT_CHARACTER':
      console.log(action);
      return { ...state, currentCharacter: action.payload };
    default:
      return state;
  }
};
