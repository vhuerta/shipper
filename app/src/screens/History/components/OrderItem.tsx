import React, { useState } from 'react';
import { Container } from '../../OrderDetail/components/PackageElement.styled';
import { Description, DescriptionContainer, OrderContainer, Small } from './OrderItem.styled';
import PackageList from '../../OrderDetail/components/PackageList';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

type OrderItem = {
  order: ShippedOrder;
};

export default function OrderItem({ order }: OrderItem) {
  const theme = useTheme();
  const [date] = order.shippingDate.toISOString().split('T');
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <OrderContainer onPress={handleToggleOpen}>
        <DescriptionContainer>
          <Description>Order #{order.id}</Description>
          <Small>Shipping date: {date}</Small>
        </DescriptionContainer>
        {!isOpen && <Ionicons name="chevron-down" size={30} color={theme.text.default} />}
        {isOpen && <Ionicons name="chevron-up" size={30} color={theme.text.default} />}
      </OrderContainer>
      {isOpen && <PackageList packages={order.packages} readOnly={true} />}
    </Container>
  );
}
