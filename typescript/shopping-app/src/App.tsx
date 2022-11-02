import { useState } from 'react';
import { v4 as getId } from 'uuid';
import ShoppingList from './components/shoppingList';
import ShoppingListForm from './components/shoppingListForm';
import { Item } from './models/items';

// import Greeter from './components/greeter';

const App = (): JSX.Element => {
  // const items = [
  //   { id: 1, productName: 'lemon', quantity: 10 },
  //   { id: 2, productName: 'chicken breast', quantity: 2 },
  // ];

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (productName: string, quantity = 1): void => {
    setItems([...items, { id: getId(), productName, quantity }]);
  };

  return (
    <div className="App">
      {/* <Greeter personName="Elton" /> */}
      <ShoppingListForm addItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
};

export default App;
