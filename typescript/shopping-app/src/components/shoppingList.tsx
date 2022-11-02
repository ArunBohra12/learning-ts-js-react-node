import { Item } from '../models/items';

interface ShoppingListProps {
  items: Array<Item>;
}

const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>Shopping List</h1>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.productName} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
