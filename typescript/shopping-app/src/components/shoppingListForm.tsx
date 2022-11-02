import React, { useRef, useState } from 'react';

interface ShoppingListFormProps {
  addItem: (productName: string, quantity?: number) => void;
}

const ShoppingListForm = ({ addItem }: ShoppingListFormProps): JSX.Element => {
  const productNameRef = useRef<HTMLInputElement>(null);

  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(e.target.value));
  };

  const handleAddItem = (e: React.FormEvent): void => {
    e.preventDefault();

    const inputName = productNameRef.current!.value;
    if (!inputName) return alert('Please provide a product name');

    addItem(inputName, quantity);
    productNameRef.current!.value = '';
    setQuantity(1);
  };

  return (
    <form onSubmit={handleAddItem}>
      <input ref={productNameRef} type="text" placeholder="Product name" />
      <input type="number" placeholder="Product quantity" value={quantity} onChange={handleQuantityChange} />

      <button type="submit">Add Item</button>
    </form>
  );
};

export default ShoppingListForm;
