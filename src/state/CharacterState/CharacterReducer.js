export const actions = { addCharacter: 'ADD_CHARACTER' };

export const initialState = { characters: [] };

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addCharacter:
      return { ...state, characters: action.payload.characters };
    default:
      return state;
  }
};
