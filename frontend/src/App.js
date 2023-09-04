import React, { Component } from 'react';
import './App.css';

import Table from './components/Table';
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
          <Table />
        </div>
      </Provider>
    );
  }
}

export default App;
