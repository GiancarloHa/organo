import styled from 'styled-components';

const StyledBanner = styled.header`
    background-color: #000;
    text-align: center;
    img {
        max-width: auto;
    }
`

function Banner () {
    return (
        <StyledBanner>
            <img src="/imagens/cblol-2023-fundo.png" alt="O banner principal da pagina"/>
        </StyledBanner>

    );
}

export default Banner;