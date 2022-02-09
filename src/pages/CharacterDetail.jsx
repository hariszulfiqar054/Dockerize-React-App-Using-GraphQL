import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCharacterData } from '../hooks/useGetSingleCharacterData';

export default function CharacterDetail() {
  const { id } = useParams();

  const { data, error, loading } = useGetSingleCharacterData(id);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        <img src={data.character.image} />
        <p>{data.character.name}</p>
      </div>
      <div>
        {data?.character.episode?.map((data) => (
          <div style={{ marginTop: '2rem' }}>
            <div>Name : {data.name}</div>
            <div>Episode : {data.episode}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
