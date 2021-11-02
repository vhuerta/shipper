import React, { useContext } from 'react';
import { MainContainer, TitleContainer } from '../../components/Layout.styled';
import { Title } from '../../components/Typography.styled';
import { Store } from '../../store/Store';
import OrdersList from './components/OrdersList';

export default function History() {
  const { state } = useContext(Store);
  const orders = state.shippedOrders;

  return (
    <MainContainer edges={['top']}>
      <TitleContainer>
        <Title>Shipped Orders</Title>
      </TitleContainer>
      <OrdersList
        orders={orders.sort((a, b) => b.shippingDate.getTime() - a.shippingDate.getTime())}
      />
    </MainContainer>
  );
}
