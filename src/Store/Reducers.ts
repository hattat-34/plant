import {combineReducers} from '@reduxjs/toolkit';
import {PlantQuestions, PlantSpecies} from './Entities';

const rootReducer = combineReducers({
  plantQuestions: PlantQuestions,
  plantSpecies: PlantSpecies,
});

export default rootReducer;
