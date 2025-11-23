import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Cart from './cart';

describe('Cart Screen', () => {
  it('renders table headers', () => {
    const { getByText } = render(<Cart />);
    
    expect(getByText('Tên sản phẩm')).toBeTruthy();
    expect(getByText('Số lượng')).toBeTruthy();
    expect(getByText('Thành tiền')).toBeTruthy();
  });

  it('renders create order button and navigates', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<Cart navigation={mockNavigation} />);

    const button = getByText('Tạo đơn hàng');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('con');
  });
});
