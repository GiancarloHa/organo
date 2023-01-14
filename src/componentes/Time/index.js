import styled from "styled-components";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba'

const StyledTime = styled.section`
    text-align: center;
    padding: 20px;
    position: relative;
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

const StyledInput = styled.input`
    position: absolute;
    top: 20px;
    right: 50px;
`

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <StyledTime style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <StyledInput 
                onChange={evento => props.mudarCorDoTime(evento.target.value, props.id)} 
                type='color' 
                value={props.cor} 
            />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <StyledColaborador>
                {props.colaboradores.map( colaborador => {
                    
                    return <Colaborador corDeFundo={props.cor} key={colaborador.nome} nome={colaborador.nome} role={colaborador.role} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/> 
                })}
            </StyledColaborador>
        </StyledTime>
    )
}

export default Time;
