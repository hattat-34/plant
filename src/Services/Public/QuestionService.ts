import {
  plantQuestionFailed,
  plantQuestionReceived,
  plantQuestionRequested,
} from '../../Store/Entities/PlantQuestions';
import {apiCall} from '../../Store/Middlewares/Api';

type QuestionResponse = [
  {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
  },
];

const getQuestions = () =>
  apiCall({
    config: {
      method: 'get',
      url: 'getQuestions',
    },
    onStart: plantQuestionRequested.type,
    onSuccess: plantQuestionReceived.type,
    onError: plantQuestionFailed.type,
  });

export {getQuestions};
export type {QuestionResponse};
