import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Confirm from './confirm';

// Mock the Bill component
jest.mock('../components/billCOmpo', () => {
  const { Text } = require('react-native');
  return () => <Text>Mocked Bill</Text>;
});

describe('Confirm Screen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Confirm />);
    
    expect(getByText('Địa chỉ')).toBeTruthy();
    expect(getByText('241 Xuân Thủy')).toBeTruthy();
    expect(getByText('Đặt đơn hàng')).toBeTruthy();
    expect(getByText('Mocked Bill')).toBeTruthy();
  });

  it('navigates to success on order placement', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<Confirm navigation={mockNavigation} />);

    fireEvent.press(getByText('Đặt đơn hàng'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('success');
  });
});
