import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from '../../../components/Layout.styled';
import { Subtitle } from '../../../components/Typography.styled';
import OrderItem from './OrderItem';

type OrdersListProps = {
  orders: ShippedOrder[];
};

export default function OrdersList({ orders }: OrdersListProps) {
  return (
    <ScrollView>
      {!orders.length && <Subtitle>No shipped orders yet!</Subtitle>}
      {orders.map((order) => (
        <OrderItem order={order} key={order.id} />
      ))}
    </ScrollView>
  );
}
