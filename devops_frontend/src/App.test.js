import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question1 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question2 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question3 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 3/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question4 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 4/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question5 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 5/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Question6 as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Question 6/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Feature as option', () => {
  render(<App />);
  const linkElement = screen.getByText(/Feature/i);
  expect(linkElement).toBeInTheDocument();
});

test('render ME!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rasmus B.K. Nielsen/i);
  expect(linkElement).toBeInTheDocument();
});