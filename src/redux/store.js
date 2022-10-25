import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-Slice';
import filterReducer from './filter/filter-Slice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const contactsPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, rootReducer);

const store = configureStore({
  reducer: {
    phoneBook: persistedContactsReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}
);
const persistor = persistStore(store);

export { store, persistor };

