import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pokemon = ({ pokemon }) => {

    return (
        <>
            <Card className={`${pokemon.types[0].type.name} my-3 p-3 rounded text-center shadow p-3 rounded`} style={{ border: 'none' }}>
                <Link to={`/pokemon/${pokemon.id}/`}>
                    <Card.Img className="img" src={pokemon.sprites.other.dream_world.front_default} variant='top'/>
                </Link>
                <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                        <Card.Title as='div'><strong>{pokemon.id}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </strong></Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default pokemon;

