import {
  plantSpeciesFailed,
  plantSpeciesReceived,
  plantSpeciesRequested,
} from '../../Store/Entities/PlantSpecies';
import {apiCall} from '../../Store/Middlewares/Api';

const getCategories = () =>
  apiCall({
    config: {
      url: 'getCategories',
    },
    onStart: plantSpeciesRequested.type,
    onSuccess: plantSpeciesReceived.type,
    onError: plantSpeciesFailed.type,
  });

export {getCategories};
export type {CategoryResponse};

type CategoryImage = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: number;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
};

interface CategoryResponse {
  data: [
    {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      title: string;
      rank: number;
      image: CategoryImage;
    },
  ];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
