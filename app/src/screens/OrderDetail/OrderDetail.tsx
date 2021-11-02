import { useTheme } from '@emotion/react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { ModalContainer, SubtitleContainer, TitleContainer } from '../../components/Layout.styled';
import { Subtitle, Title } from '../../components/Typography.styled';
import { usePackItems } from '../../gql/mutations';
import { FETCH_ITEMS } from '../../gql/querys';
import { MainNavigationParamList } from '../../routes/MainNavigation';
import { addPackage, addShippedOrder, resetOrder } from '../../store/actions';
import { countTotalItems } from '../../store/selectors';
import { Store } from '../../store/Store';
import {
  BackButton,
  Button,
  ButtonPrimary,
  ButtonPrimaryText,
  ButtonText,
} from './components/PackageElement.styled';
import PackageList from './components/PackageList';

export default function OrderDetail() {
  const theme = useTheme();
  const navigation = useNavigation<StackNavigationProp<MainNavigationParamList>>();
  const [packItems] = usePackItems();
  const { state, dispatch } = useContext(Store);
  const packages = state.order.packages;

  function handleBack() {
    navigation.goBack();
  }

  function handleAddPackage() {
    dispatch(addPackage());
  }

  async function handlePrintLabel() {
    if (countTotalItems(state) < 1) {
      Alert.alert('First add some products to the package(s)');
    } else {
      try {
        const packagesWithItems = state.order.packages.filter((p) => p.line_items.length);
        const response = await packItems({
          variables: { packages: packagesWithItems },
          refetchQueries: [{ query: FETCH_ITEMS }],
        });
        const packages = response.data?.result?.packages ?? [];
        dispatch(
          addShippedOrder({
            id: state.order.id,
            packages,
            shippingDate: new Date(),
          })
        );
        dispatch(resetOrder());
        navigation.navigate('Home', { screen: 'Shipped Orders' });
      } catch (e) {
        Alert.alert('An error has ocurred communicatimg with the server');
      }
    }
  }

  return (
    <ModalContainer edges={['bottom']}>
      <TitleContainer>
        <Title>Current Order</Title>
        <BackButton onPress={handleBack}>
          <Ionicons name="close-sharp" size={25} color={theme.text.default} />
        </BackButton>
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle>Packages</Subtitle>
        <Button onPress={handleAddPackage}>
          <ButtonText>Add Package</ButtonText>
        </Button>
      </SubtitleContainer>
      <PackageList packages={packages} />
      <View>
        <ButtonPrimary onPress={handlePrintLabel}>
          <ButtonPrimaryText>Print Label</ButtonPrimaryText>
        </ButtonPrimary>
      </View>
    </ModalContainer>
  );
}
