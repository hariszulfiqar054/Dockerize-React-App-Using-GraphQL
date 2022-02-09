import { gql, useMutation } from '@apollo/client';
import React from 'react';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $supplierID: Int!) {
    createProduct(record: { name: $name, supplierID: $supplierID }) {
      record {
        name
      }
    }
  }
`;
export default function CreatePageMutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: 'Haris',
        supplerID: 3,
      },
    }
  );

  return <div onClick={() => createProduct()}>create-Cage.mPageM</div>;
}
