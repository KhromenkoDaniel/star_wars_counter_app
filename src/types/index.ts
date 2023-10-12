import {RouteProp} from '@react-navigation/native';

export type TCharacter = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type TCharacterCard = {
  character: TCharacter;
};

export type TCharactersState = {
  maleFavorites: TCharacter[];
  femaleFavorites: TCharacter[];
  otherFavorites: TCharacter[];
  characters: TCharacter[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
};

export type TPaginationState = {
  currentPage: number;
  totalCount: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

export type TSearch = {
  onSearch: (search: string) => void;
};

export type TPagination = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

export type TFetchCharactersResponse = {
  results: any[];
  totalCount: number;
};

export type TFetchCharactersParams = {
  page: number;
  searchTerm?: string;
};

export type TCharacterList = {
  characters: TCharacter[];
};

type TRootStackParamList = {
  Home: undefined;
  CharacterDetails: {character: TCharacter};
};

export type TCharacterDetailsRouteProp = RouteProp<
  TRootStackParamList,
  'CharacterDetails'
>;

export type TTextInfo = {
  label: string;
  data: string;
};
