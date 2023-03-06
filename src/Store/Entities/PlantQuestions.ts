import {createSlice} from '@reduxjs/toolkit';

interface PlantQuestion {
  id: number;
  order: number;
  title: string;
  subTitle: string;
  imageUri: string;
  uri: string;
}

interface PlantQuestionState {
  loading: boolean;
  list?: PlantQuestion[];
}

const initialState: PlantQuestionState = {
  loading: false,
  list: undefined,
};

const plantQuestion = createSlice({
  name: 'question',
  initialState,
  reducers: {
    plantQuestionRequested: question => {
      question.loading = true;
    },
    plantQuestionReceived: (question, action) => {
      question.list = action.payload; // TO DO
      question.loading = false;
    },
    plantQuestionFailed: question => {
      question.loading = false;
    },
  },
});

export default plantQuestion.reducer;
export const {
  plantQuestionRequested,
  plantQuestionReceived,
  plantQuestionFailed,
} = plantQuestion.actions;
