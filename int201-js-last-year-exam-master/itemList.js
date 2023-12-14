import { products } from "./data/products.js";

function itemList(userItems) {
  const items = userItems;

  const initialPage = () => {
    showItems(items);
    const user = document.querySelector('input')
    user.addEventListener('input',filterItemsHandler)
  };

  const filterItemsHandler = (event) => {
    console.log(event.target.value.toLowerCase())
    const result = items.filter((item) => {
      return item.keywords.toLowerCase().includes(event.target.value.toLowerCase())
    })
    showItems(result)
  };

  const showItems = (items) => {
    const ul = document.getElementById('items')
    ul.innerHTML = ''
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `ID:${item.id}, NAME:${item.name}', KEYWORDS:${item.keywords}`
      ul.appendChild(li)
    });
  };

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  };
}
export { itemList };
const { initialPage, filterItemsHandler, showItems } = itemList(products);
initialPage();
