import { useNavigation } from '@react-navigation/core';
import { fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import { useItemsQuery } from '../../gql/querys';
import { render } from '../../test-utils';
import Order from './Order';

const mockedNavigate = jest.fn();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/core', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

jest.mock('../../gql/querys', () => ({
  useItemsQuery: jest.fn().mockReturnValue({ data: { items: undefined } }),
}));

describe('<Order />', () => {
  test('renders correctly without items', () => {
    const tree = render(<Order />);
    expect(tree).toMatchSnapshot();
  });

  test('pressing the order button triggers navigation to the order datail view', () => {
    const { getByTestId, debug } = render(<Order />);
    fireEvent(getByTestId('order-button'), 'press');
    expect(mockedNavigate.mock.calls[0][0]).toEqual('OrderDetail');
  });

  test('renders item list correctly and adds tap over each item and the item get added to the package', async () => {
    const items = [
      {
        id: 1,
        sku: 'product-1',
        location: 'a1',
        quantity: 1,
      },
      {
        id: 2,
        sku: 'product-2',
        location: 'a2',
        quantity: 1,
      },
    ];

    (useItemsQuery as jest.Mock).mockReturnValue({ data: { items } });

    const { getByText, getByTestId } = render(<Order />);
    getByText('Packed Products: 0');
    getByText('Active Package: 1');

    getByText(`SKU: ${items[0].sku}`);
    fireEvent(getByTestId(`item-${items[0].id}`), 'press');
    await waitFor(() => expect(getByText(`Packed Products: 1`)).toBeTruthy());

    getByText(`SKU: ${items[0].sku}`);
    fireEvent(getByTestId(`item-${items[1].id}`), 'press');
    await waitFor(() => expect(getByText(`Packed Products: 2`)).toBeTruthy());
  });
});
