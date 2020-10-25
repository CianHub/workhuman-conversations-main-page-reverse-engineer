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

    timeline: {
      priorities: [
        {
          type: 'active',
          tasks: ['Destroy the Death Star', 'Repair the Falcon'],
        },
        {
          type: 'closed',
          tasks: ['Brush Fur', 'Escape Hoth', 'Save Leia'],
        },
      ],
      feedback: [
        {
          authorId: 1,
          message: 'Great flying Chewie!',
          age: '7 Days ago',
        },
      ],
      checkIn: [
        {
          authorId: 3,
          title: 'Falcon Repairs',
          message: 'We have to meet about the repairs furball!',
          age: 'October 30, 2020',
        },
      ],
    },
  },
};

export const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return { ...state, characters: action.payload };
    case 'CHANGE_CURRENT_CHARACTER':
      return { ...state, currentCharacter: action.payload };
    default:
      return state;
  }
};
