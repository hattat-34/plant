import {createSlice} from '@reduxjs/toolkit';
import {CategoryResponse} from '../../Services/Public/CategoryService';

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
    plantSpeciesReceived: (species, {payload}: {payload: CategoryResponse}) => {
      species.list = payload.data
        .map(response => ({
          id: response.id,
          name: response.name,
          title: response.title,
          rank: response.rank,
          imageUrl: response.image.url,
        }))
        .sort((s1, s2) => s1.rank - s2.rank);
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
export type {PlantSpecies};
