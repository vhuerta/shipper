import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

type ItemsData = {
  items: Item[];
};

export const FETCH_ITEMS = gql`
  query FetchItems {
    items: line_items {
      id
      quantity
      sku
      location
    }
  }
`;

export const useItemsQuery = () => useQuery<ItemsData>(FETCH_ITEMS);
