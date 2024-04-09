import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  News: undefined;
  Details: {link: string};
};

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
