import { useTheme } from '@emotion/react';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { removeItem } from '../../../store/actions';
import { Store } from '../../../store/Store';
import {
  Button,
  Container,
  Description,
  DescriptionContainer,
  QuantityContainer,
  QuantityText,
  Small,
} from './PackageElementItem.styled';

type PackageElementItemProps = {
  item: Item;
  readOnly: boolean;
};

export default function PackageElementItem({ item, readOnly }: PackageElementItemProps) {
  const theme = useTheme();
  const { dispatch } = useContext(Store);
  const itemName = item.sku.split('-').join(' ');

  function handleRemoveItem() {
    dispatch(removeItem(item));
  }

  return (
    <Container>
      <QuantityContainer>
        <QuantityText>{item.quantity}</QuantityText>
      </QuantityContainer>
      <DescriptionContainer>
        <Description>{itemName} </Description>
        <Small>
          ({item.sku}, {item.location})
        </Small>
      </DescriptionContainer>
      {!readOnly && (
        <Button onPress={handleRemoveItem}>
          <Ionicons name={'trash'} color={theme.text.accent} size={16} />
        </Button>
      )}
    </Container>
  );
}
