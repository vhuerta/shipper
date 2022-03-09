import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MainContainer, SearchInput, TitleContainer } from '../../components/Layout.styled';
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

  const [filter, setFilter] = useState('');
  const [sortByName, setSortByName] = useState(null);

  useEffect(() => {
    dispatch(resetOrder());
  }, []);

  function handleShowOrderDetail() {
    navigation.navigate('OrderDetail');
  }

  function handleTapItem(item: Item) {
    dispatch(addItem(item));
  }

  function handleSortByName() {
    setSortByName(sortByName ? (sortByName === 'asc' ? 'desc' : null) : 'asc');
  }

  let filteredItems = [];

  items.forEach((item) => {
    console.log(filter.toLowerCase(), item);
    if (!filter) return filteredItems.push(item);

    if (item.sku.toLowerCase().includes(filter.toLowerCase())) {
      return filteredItems.push(item);
    }

    if (item.location.toLowerCase().includes(filter.toLowerCase())) {
      return filteredItems.push(item);
    }
  });

  filteredItems.sort((a,b) => {
    if(sortByName === 'asc') return a.sku > b.sku? 1 : -1;
    if(sortByName === 'desc') return b.sku < a.sku? -1 : 1;
  })

  return (
    <MainContainer edges={['top']}>
      <TitleContainer>
        <Title>Products</Title>
        <OrderButton itemsCount={countTotalItems(state)} onPress={handleShowOrderDetail} />
      </TitleContainer>
      <Subtitle>
        <SubtitleBold>Active Package: {state.activePackage}</SubtitleBold>
        {'  |  '}
        <SubtitleBold>Packed Products: {countActivePackageItems(state)}</SubtitleBold>
      </Subtitle>
      <Subtitle>Tap on a product to add it to the package.</Subtitle>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <SearchInput value={filter} onChangeText={setFilter} placeholder="Filter Items" />
        </View>
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{}} onPress={handleSortByName}>
            <Text style={{ color: sortByName ? '#00b589' : 'gray' }}>
              Sort by Name
              {!sortByName && '  '}
              {sortByName && sortByName === 'asc' && ' ⋁'}
              {sortByName && sortByName === 'desc' && ' ⋀'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ItemsList items={filteredItems} onPressItem={handleTapItem} />
    </MainContainer>
  );
}
