// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

// Test prompt: Test the Button component to ensure it renders children and triggers onClick handler correctly.

test('renders button with children and triggers onClick handler', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// utils.test.js
import { add, fetchData } from './utils';

// Test prompt: Test the add function to ensure it returns the correct sum of two numbers.

test('adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
});

// Test prompt: Test the fetchData function to ensure it fetches data from the API correctly.

describe('fetchData', () => {
  it('fetches data from API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'test data' }),
      })
    );

    const data = await fetchData();
    expect(data).toEqual({ data: 'test data' });
  });
});

// Integration test
// Integration tests should be placed in a separate file or in a separate describe block.

describe('Button Integration Test', () => {
  it('triggers onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ParentComponent onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
