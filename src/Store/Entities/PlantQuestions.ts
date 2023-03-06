import {createSlice} from '@reduxjs/toolkit';
import {QuestionResponse} from '../../Services/Public/QuestionService';

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
    plantQuestionReceived: (
      question,
      {payload}: {payload: QuestionResponse},
    ) => {
      question.list = payload
        .map(response => ({
          id: response.id,
          order: response.order,
          title: response.title,
          subTitle: response.subtitle,
          imageUri: response.image_uri,
          uri: response.uri,
        }))
        .sort((q1, q2) => q1.order - q2.order);
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
export type {PlantQuestion};
