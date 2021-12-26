import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components
import Loader from '../components/Loader';

const PokemonPage = ({ match }) => {

    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='rounded text-center shadow p-1 m-3 bg-white' style={{ border: 'none' }}>
                            <Card.Body className={`rounded text-black font-weight-bold`}>
                                <Card.Img style={{ width: '15rem' }} src={pokemonDetails.sprites.other.home.front_default} variant='top' />
                                <Card.Title as='div'>
                                    <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                                </Card.Title>
                                <Card.Text>
                                    <Row>
                                        {pokemonDetails.types.map(t => (
                                            <Col key={t.type.name}>
                                                <div className={`${pokemonDetails.types[0].type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>Abilities</div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        {pokemonDetails.abilities.map(a => (
                                            <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Row className={`rounded px-4 py-1`}>
                                                    {a.ability.name.toUpperCase()}
                                                </Row>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>Stats</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {pokemonDetails.stats.map(a => (
                                            <Col key={a.stat.name} xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1`}>
                                                    <Col> {a.stat.name.toUpperCase()}</Col>
                                                    <Col> <ProgressBar animated variant="success" striped now={`${a.base_stat}`} label={`${a.base_stat}%`} /> </Col>

                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default PokemonPage;