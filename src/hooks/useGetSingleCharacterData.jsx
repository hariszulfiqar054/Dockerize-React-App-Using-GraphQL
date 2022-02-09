import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER_DETAIL = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useGetSingleCharacterData = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { id },
  });

  console.log(error);

  return {
    data,
    error,
    loading,
  };
};
