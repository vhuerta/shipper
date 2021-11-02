import React from 'react';
import { List } from '../../../components/Layout.styled';
import ItemElement from './ItemElement';

type ItemsListProps = {
  items: Item[];
  onPressItem: (item: Item) => void;
};

export default function ItemsList({ items, onPressItem }: ItemsListProps) {
  return (
    <List
      data={items}
      renderItem={({ item }) => <ItemElement item={item} onPress={onPressItem} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
}
