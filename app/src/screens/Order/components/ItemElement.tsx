import React, { useContext } from 'react';
import { countItem } from '../../../store/selectors';
import { Store } from '../../../store/Store';
import {
  Container,
  DescriptionContainer,
  Location,
  LocationContainer,
  Name,
  Quantity,
  QuantityContainer,
  Sku,
  Stock,
} from './ItemElement.styled';

type ItemElementProps = {
  item: Item;
  onPress: (item: Item) => void;
};

export default function ItemElement({ item, onPress }: ItemElementProps) {
  const { state } = useContext(Store);
  const itemName = item.sku.split('-').join(' ');
  const remainingStock = item.quantity - countItem(state, item.id);
  const disabled = remainingStock < 1;

  function handlePress() {
    onPress(item);
  }

  return (
    <Container disabled={disabled} onPress={handlePress} testID={`item-${item.id}`}>
      <LocationContainer>
        <Location>{item.location}</Location>
      </LocationContainer>
      <DescriptionContainer>
        <Name>{itemName}</Name>
        <Sku>SKU: {item.sku}</Sku>
      </DescriptionContainer>
      <QuantityContainer>
        <Quantity>{remainingStock}</Quantity>
        <Stock>In stock</Stock>
      </QuantityContainer>
    </Container>
  );
}
