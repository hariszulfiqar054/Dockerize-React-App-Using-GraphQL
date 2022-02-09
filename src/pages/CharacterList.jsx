import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharacterList() {
  const { data, loading, error } = useQuery(GET_CHARACTER);

  //   console.log(data.characters.results);
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {data.characters.results?.map((data) => (
        <Link key={data.id} to={`/${data.id}`}>
          <img src={data.image} />
          <p>name : {data.name}</p>
        </Link>
      ))}
    </div>
  );
}
