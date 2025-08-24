import Logo from '../assets/clacet.png'
import styled from 'styled-components'

export default function Head() {
    return (
        <Topo><img src={Logo} alt="" />Cineflex</Topo>
    )
}

const Topo = styled.h1`
    font-family: 'Sarala';
    font-size: 32px;
    weight: 400;
    background-color: #E88373;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FADBC5;
    padding: 10px;
    min-width: 400px;
    img{
        width: 40px;
        height: 40px;
    }
`