import React, { Component } from 'react';
import './App.css';

import MainPage from './components/mainPage';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App w-screen">
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
