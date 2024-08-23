type RootStackParamList = {
  HomePage: undefined;
  Onboarding1: undefined;
};
interface PrimaryButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

interface OnboardingType {
  id: number;
  image: any;
  title?: string;
  bold?: string;
  title2?: string;
}

interface FeatureType {
  image: any;
  title: string;
  subTitle: string;
}
interface Offers {
  id: number;
  title: string;
  subTitle: string;
}

interface PaginatorProps {
  data: OnboardingType[];
}

interface DatasType {
  data: DataType[] | any;
  error: boolean;
  loading: boolean;
}

interface ImageType {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

interface DataType {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: ImageType;
}

interface QuestionType {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface OnboardingItemProps {
  item: OnboardingType;
  onPress: () => void;
}

export {
  PaginatorProps,
  RootStackParamList,
  PrimaryButtonProps,
  FeatureType,
  Offers,
  DataType,
  DatasType,
  OnboardingType,
  QuestionType,
  OnboardingItemProps,
};
