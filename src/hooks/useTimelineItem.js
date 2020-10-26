export function useTimelineItem(type, characters, currentCharacter) {
  const id = currentCharacter.id;
  const currentChar = JSON.parse(JSON.stringify(currentCharacter));
  const timelineItemToEdit = currentChar.timeline[type];

  if (type === 'priorities')
    timelineItemToEdit[0].tasks.push('Newly added task');

  if (type === 'feedback')
    timelineItemToEdit.push({
      authorId: id === 1 ? 0 : 1,
      message: 'Nice job adding feedback!',
      age: 'Just Now',
    });

  if (type === 'checkIn')
    timelineItemToEdit.push({
      authorId: id === 1 ? 0 : 1,
      title: 'New Check In',
      message: 'Nice job adding check-in!',
      age: 'Just Now',
    });

  const newCharacters = characters.map((character) =>
    character.id === id ? currentChar : character
  );

  return [currentChar, newCharacters];
}
