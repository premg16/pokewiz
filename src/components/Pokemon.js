import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pokemon = ({ pokemon }) => {

    return (
        <>
            <Card className={`${pokemon.types[0].type.name} my-3 p-3 rounded text-center shadow p-3 mb-3 rounded`} style={{ border: 'none' }}>
                <Link to={`/pokewiz/pokemon/${pokemon.id}`}>
                    <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.other.home.front_default} variant='top'/>
                </Link>
                <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                    <Link to={`/pokewiz/pokemon/${pokemon.name}`} className='link-name'>
                        <Card.Title as='div'><strong>{pokemon.id}. {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </strong></Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default pokemon;

