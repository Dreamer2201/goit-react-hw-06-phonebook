import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore(
    rootReducer,
    );

export default store;

