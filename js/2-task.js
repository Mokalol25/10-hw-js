const cards = ['1-task', '2-task', '3-task', '4-task'];
// Видалення
const cardNameDelete = prompt('Введіть назву карточки, яку хочете видалити');
const cardToDeleteIndex = cards.indexOf(cardNameDelete);
const deleteCard = cards.splice(cardToDeleteIndex, 1);
console.log(cards)
// Додати
const cardNameAdd = prompt('На пишіть назву нової карточки');
const cardToAdd = cards.splice(cards.length, 0, cardNameAdd);
console.log(cards);
// Оновити
const cardCut = prompt('Яку картку ви хочете замінити');
const cardCutIndex = cards.indexOf(cardCut);
const cardAdd = prompt('Яку картку ви хочете поставити на місце вмдаленої картки');
cards.splice(cardCutIndex, 1, cardAdd);
console.log(cards);