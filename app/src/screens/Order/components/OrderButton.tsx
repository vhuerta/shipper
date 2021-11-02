import { useTheme } from '@emotion/react';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { Badge, BadgeText, Button } from './OrderButton.styled';

type OrderButtonProps = {
  onPress: () => void;
  itemsCount: number;
};

export default function OrderButton({ itemsCount, onPress }: OrderButtonProps) {
  const theme = useTheme();
  return (
    <Button onPress={onPress} testID={'order-button'}>
      <Badge>
        <BadgeText>{itemsCount}</BadgeText>
      </Badge>
      <Octicons name={'package'} size={30} color={theme.text.secondary} />
    </Button>
  );
}
