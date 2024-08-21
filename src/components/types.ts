export type RootStackParamList = {
  HomePage: undefined;
  Onboarding1: undefined;
};
export interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: React.FC;
}
export type PageProps = NativeStackScreenProps<RootStackParamList, "HomePage">;

export interface OnboardingType {
  id: number;
  image: any;
  title?: string;
  bold?: string;
  title2?: string;
}

export interface FeatureType {
  image: any;
  title: string;
  subTitle: string;
}
