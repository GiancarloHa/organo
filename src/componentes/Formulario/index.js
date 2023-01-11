import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import styled from 'styled-components'

const StyledFormulario = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
    form {
        max-width: 80%;
        background-color: #f2f2f2;
        border-radius: 20px;
        padding: 36px 64px;
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    }
`

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [role, setRole] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            role,
            imagem,
            time
        })
        setNome('')
        setRole('')
        setImagem('')
        setTime('')
    }

    return (
        <StyledFormulario>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do jogador" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Role" 
                    itens={props.roles}
                    valor={role}
                    aoAlterado={valor => setRole(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao> 
            </form>
        </StyledFormulario>
    )
}

export default Formulario