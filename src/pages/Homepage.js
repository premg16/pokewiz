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
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()


    let count = 1
    let pokemonArray = []


    const getPokemonList = async () => {
        for (let i = count; i < count + 9; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        setNextCount(count+9)
        setPrevCount(1)
    }

    const getPokemonData = async (id) => {
        const urlRes = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
        setNextPageUrl()
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res
    }

    useEffect(() => {
        getPokemonList()
    }, [])

    const gotoNextPage = async () => {
        setLoading(true)
        setPrevCount(nextcount)
        for (let i = nextcount; i < nextcount + 9; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        setNextCount(nextcount+9)
        console.log(nextcount)
        console.log(prevcount)
    }

    const gotoPrevPage = async () => {
        setLoading(true)
        setNextCount(prevcount)
        for (let i = prevcount; i < prevcount + 9; i++) {
            pokemonArray.push(await getPokemonData(i))
        }
        setPokemon(pokemonArray)
        setLoading(false)
        setPrevCount()
        console.log(nextcount)
        console.log(prevcount)
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
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
