export function selectBook(book) {
  console.log('selectBook#book', book);
  // Will return an 'action' object with a 'type' property that will be
  // matching in the reducers.
  // Payload will be the data for the event.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}