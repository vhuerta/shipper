import styled from '@emotion/native';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.background.default};
`;

export const ModalContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.background.default};
`;

export const TitleContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsTitleContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.FlatList`
  margin-top: 10px;
  flex: 1;
` as unknown as typeof FlatList;

export const ScrollView = styled.ScrollView`
  margin-top: 10px;
  flex: 1;
`;

export const SearchInput = styled.TextInput`
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  background-color: #eaebf9;
  margin: 10px 0px;
`