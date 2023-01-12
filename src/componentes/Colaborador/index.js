import { AiFillCloseCircle } from 'react-icons/ai'
import styled from "styled-components";

const StyledColaborador = styled.div`
    width: 280px;
    position: relative;
    img {
        width: 100px;
        height: 80px;
        border-radius: 50%;
        position: relative;
        bottom: -50px;
    }
`
const StyleCabecalho = styled.div`
    border-radius: 10px 10px 0px 0px;
`


const Rodape = styled.div`
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 5px;
    background-color: #F0F0F0;
    a{
        color: #6278f7;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
    }
    h5{
        font-size: 18px;
        line-height: 18px;
        color: #212121;
    }
`

const Delete = styled(AiFillCloseCircle)`
    position: absolute;
    right: -10px;
    top: -10px;
`

const Colaborador = ({ nome, imagem, role, corDeFundo, aoDeletar }) => {
    return (
    <StyledColaborador>
        <Delete size={20} color={'#fff'} onClick={aoDeletar}>
        </Delete>
        <StyleCabecalho style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </StyleCabecalho>
        <Rodape>
            <a href={"https://lol.fandom.com/wiki/"+nome}>{nome}</a>
            <h5>{role}</h5>
        </Rodape>
    </StyledColaborador>)
}

export default Colaborador