import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './login';

describe('Login Screen', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Mật khẩu')).toBeTruthy();
    expect(getByText('Đăng nhập')).toBeTruthy();
  });

  it('navigates to Main on login', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<Login navigation={mockNavigation} />);

    fireEvent.press(getByText('Đăng nhập'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Main');
  });

  it('navigates to Register', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<Login navigation={mockNavigation} />);

    fireEvent.press(getByText('Đăng ký'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('register');
  });
});
