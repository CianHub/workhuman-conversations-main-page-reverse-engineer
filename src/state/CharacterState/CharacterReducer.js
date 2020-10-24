export const actions = { addCharacter: 'ADD_CHARACTER' };

export const initialState = { characters: [] };

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};
