import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {PlantQuestions, PlantSpecies, User} from './Entities';
import {mmkvPersistConfig} from './Storage/PersistConfig';

const rootReducer = combineReducers({
  plantQuestions: PlantQuestions,
  plantSpecies: PlantSpecies,
  user: User,
});

const persistedRootReducer = persistReducer(mmkvPersistConfig, rootReducer);

export default persistedRootReducer;

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}
