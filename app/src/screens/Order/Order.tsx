import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { MainContainer, TitleContainer } from '../../components/Layout.styled';
import { Subtitle, SubtitleBold, Title } from '../../components/Typography.styled';
import { useItemsQuery } from '../../gql/querys';
import { MainNavigationParamList } from '../../routes/MainNavigation';
import { addItem, resetOrder } from '../../store/actions';
import { countActivePackageItems, countTotalItems } from '../../store/selectors';
import { useStore } from '../../store/Store';
import ItemsList from './components/ItemsList';
import OrderButton from './components/OrderButton';

export default function Order() {
  const navigation = useNavigation<StackNavigationProp<MainNavigationParamList>>();
  const { state, dispatch } = useStore();
  const { data } = useItemsQuery();
  const items = data?.items || [];

  useEffect(() => {
    dispatch(resetOrder());
  }, []);

  function handleShowOrderDetail() {
    navigation.navigate('OrderDetail');
  }

  function handleTapItem(item: Item) {
    dispatch(addItem(item));
  }

  return (
    <MainContainer edges={['top']}>
      <TitleContainer>
        <Title>Products</Title>
        <OrderButton
          itemsCount={countTotalItems(state)}
          onPress={handleShowOrderDetail}
        />
      </TitleContainer>
      <Subtitle>
        <SubtitleBold>Active Package: {state.activePackage}</SubtitleBold>
        {'  |  '}
        <SubtitleBold>Packed Products: {countActivePackageItems(state)}</SubtitleBold>
      </Subtitle>
      <Subtitle>Tap on a product to add it to the package.</Subtitle>
      <ItemsList items={items} onPressItem={handleTapItem} />
    </MainContainer>
  );
}
