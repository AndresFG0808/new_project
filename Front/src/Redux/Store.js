import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modulesReducer from './Features/modules';

const modulesPersistConfig = {
    key: 'modules',
    storage,
};

const persistedModulesReducer = persistReducer(modulesPersistConfig, modulesReducer);

const rootReducer = combineReducers({
    modules: persistedModulesReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };