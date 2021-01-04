import { act, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import { shoppiesReducer } from './state/reducers'
import { unmountComponentAtNode } from "react-dom";

const store = createStore(shoppiesReducer, applyMiddleware(thunk))

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders dashboard', () => {
  act(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>, container)
  })
  const search = screen.getByPlaceholderText(/search a movie/i)
  const nominations = screen.getByText(/nominations/i)
  const header = screen.getByText(/shoppies/i)
  expect(header).toBeInTheDocument()
  expect(nominations).toBeInTheDocument()
  expect(search).toBeInTheDocument()
});
