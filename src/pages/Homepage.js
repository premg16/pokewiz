import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

// Components
import Pokemon from '../components/Pokemon'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

const Homepage = () => {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextcount, setNextCount]     = useState()
    const [prevcount, setPrevCount]     = useState(1)
    let max = 898

    let count = 1
    let pokemonArray = []

    const getPokemonList = async () => {
        for (let i = count; i < count + 6; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        setNextCount(count+6)
        setPrevCount(1)
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res
    }

    useEffect(() => {
        getPokemonList()
    }, [])

    const gotoNextPage = async () => {
        setLoading(true)
        for (let i = nextcount; i < nextcount + 6; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        setPrevCount(nextcount-6)
        if (nextcount + 6 == max) {
            setNextCount(nextcount)
        }
        else {
            setNextCount(nextcount+6)
        }       
    }

    const gotoPrevPage = async () => {
        setLoading(true)
        for (let i = prevcount; i < prevcount + 6; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        if (prevcount == 1) {
            setPrevCount(prevcount)
        }
        else {
            setPrevCount(prevcount-6)
        }
        setNextCount(prevcount+6)
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row className="mtop">
                    {pokemon.map(p => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Pokemon pokemon={p.data} />
                        </Col>
                    ))}
                </Row>
            )}
            <Paginate
                gotoNextPage={gotoNextPage}
                gotoPrevPage={gotoPrevPage}
            />
        </>
    )
}

export default Homepage
