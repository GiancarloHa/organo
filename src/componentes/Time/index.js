import styled from "styled-components";
import Colaborador from "../Colaborador";

const StyledTime = styled.section`
    text-align: center;
    padding: 20px;
    h3 {
        font-size: 32px;
        border-bottom: 4px solid;
        display: inline-block;
    }
`

const StyledColaborador = styled.div`
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        flex-wrap: wrap;
`

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colaboradores.length > 0) && <StyledTime style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <StyledColaborador>
                {props.colaboradores.map( colaborador => {
                    
                    return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} role={colaborador.role} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/> 
                })}
            </StyledColaborador>
        </StyledTime>
    )
}

export default Time;
