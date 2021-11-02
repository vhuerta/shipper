import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';

type PackagesData = {
  result: {
    packages: Package[];
  };
};

type PackagesVariables = {
  packages: Package[];
};

export const PACK_ITEMS = gql`
  mutation PackItems($packages: [PackageInput]!) {
    result: pack_items(data: { packages: $packages }) {
      packages {
        id
        line_items {
          id
          quantity
          sku
          location
        }
      }
    }
  }
`;

export const usePackItems = () => useMutation<PackagesData, PackagesVariables>(PACK_ITEMS);
