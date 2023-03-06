import {createSlice} from '@reduxjs/toolkit';

interface PlantSpecies {
  id: number;
  name: string;
  title: string;
  rank: number;
  imageUrl: string;
}

interface PlantSpeciesState {
  loading: boolean;
  list?: PlantSpecies[];
}

const initialState: PlantSpeciesState = {
  loading: false,
  list: undefined,
};

const plantSpecies = createSlice({
  name: 'species',
  initialState,
  reducers: {
    plantSpeciesRequested: species => {
      species.loading = true;
    },
    plantSpeciesReceived: (species, action) => {
      species.list = action.payload; // TO DO
      species.loading = false;
    },
    plantSpeciesFailed: species => {
      species.loading = false;
    },
  },
});

export default plantSpecies.reducer;
export const {plantSpeciesRequested, plantSpeciesReceived, plantSpeciesFailed} =
  plantSpecies.actions;
