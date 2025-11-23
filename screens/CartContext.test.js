import React, { useContext } from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { CartProvider, CartContext } from './CartContext';
import { Text, Button } from 'react-native';

// Mock data to match mock_data.json
jest.mock('../mock_data.json', () => ({
  data: [
    { id: 1, product: "Bình ga 12kg", priceN: "371600" },
    { id: 2, product: "Bình ga 48kg", priceN: "1486300" }
  ]
}));

const TestComponent = () => {
  const { item, addOnetoCart, removeOnefromCart, deletefromCart, getTotalCost, getProductQuantity } = useContext(CartContext);

  return (
    <>
      <Text testID="cart-count">{item.length}</Text>
      <Text testID="total-cost">{getTotalCost()}</Text>
      <Text testID="quantity-1">{getProductQuantity(1)}</Text>
      <Button title="Add 1" onPress={() => addOnetoCart(1)} />
      <Button title="Remove 1" onPress={() => removeOnefromCart(1)} />
      <Button title="Delete 1" onPress={() => deletefromCart(1)} />
    </>
  );
};

describe('CartContext', () => {
  it('provides cart functionality', () => {
    const { getByTestId, getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Initial state
    expect(getByTestId('cart-count').props.children).toBe(0);
    expect(getByTestId('total-cost').props.children).toBe(0);

    // Add item
    const addButton = getByText('Add 1');
    fireEvent.press(addButton);
    
    expect(getByTestId('cart-count').props.children).toBe(1);
    expect(getByTestId('quantity-1').props.children).toBe(1);
    expect(getByTestId('total-cost').props.children).toBe(371600);

    // Add another item
    fireEvent.press(addButton);
    expect(getByTestId('quantity-1').props.children).toBe(2);
    expect(getByTestId('total-cost').props.children).toBe(371600 * 2);

    // Remove item
    const removeButton = getByText('Remove 1');
    fireEvent.press(removeButton);
    expect(getByTestId('quantity-1').props.children).toBe(1);

    // Delete item
    const deleteButton = getByText('Delete 1');
    fireEvent.press(deleteButton);
    expect(getByTestId('cart-count').props.children).toBe(0);
  });
});
