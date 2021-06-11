import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const initialState = {
  email: '',
  password: '',
  jwtToken: '',
  loggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userLogin':
      return {
        email: action.email,
        password: action.password,
        jwtToken: action.jwtToken,
        loggedIn: true,
      };
    case 'userLogout':
      return initialState;
    default:
      return state;
  }
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const pReducer = persistReducer(persistConfig, loginReducer);

export const store = createStore(pReducer, composedEnhancer);
export const persistor = persistStore(store);
