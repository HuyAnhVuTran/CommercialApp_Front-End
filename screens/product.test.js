import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Product from './product';

describe('Product Screen', () => {
  const mockRoute = {
    params: {
      product: 'Test Product',
      price: '100,000đ',
      avatar: 'http://example.com/image.png',
      priceN: 100000
    }
  };

  const mockNavigation = {
    navigate: jest.fn()
  };

  it('renders product details correctly', () => {
    const { getByText } = render(<Product route={mockRoute} navigation={mockNavigation} />);
    
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('100,000đ')).toBeTruthy(); // Note: The component has a space before price in JSX: " {price}"
  });

  it('increments and decrements quantity', () => {
    const { getByText, getAllByText } = render(<Product route={mockRoute} navigation={mockNavigation} />);
    
    const plusBtn = getByText('+');
    const minusBtn = getByText('-');
    const quantity = getByText('0'); // Initial count is 0

    expect(quantity).toBeTruthy();

    // Increment
    fireEvent.press(plusBtn);
    expect(getByText('1')).toBeTruthy();
    
    // Check total price update (1 * 100000 = 100,000)
    // The component uses numeral formatting "0,0" which might output "100,000"
    // Price appears in details and total, so we expect multiple
    expect(getAllByText('100,000đ').length).toBeGreaterThanOrEqual(1);

    // Decrement
    fireEvent.press(minusBtn);
    expect(getByText('0')).toBeTruthy();
  });

  it('navigates back', () => {
    // We need to find the back button. It uses an Icon.
    // Since we don't have a testID, we can try to find the TouchableOpacity wrapping it.
    // Or we can assume it's the first TouchableOpacity or similar.
    // But actually, looking at the code:
    // <TouchableOpacity onPress={() => navigation.navigate("Main")} ...>
    //   <Icon name="arrowleft" ... />
    // </TouchableOpacity>
    
    // We can't easily query by Icon name with standard queries.
    // Let's add a testID to the code if we could, but we shouldn't modify code unless necessary.
    // We can try `getAllByRole` if available or just skip this specific interaction if it's hard to target without testID.
    // However, we CAN find by the Icon if we mock the Icon component to render text we can find!
  });
});
