import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import styled from 'styled-components'

const StyledFormulario = styled.section`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 80px 50px;
    form {
        flex: 1;
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
    const [nomeTime, setnomeTime] = useState('')
    const [corTime, setcorTime] = useState('')

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
                <Campo 
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

                <Campo 
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
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({ 
                    nome: nomeTime, 
                    cor: corTime
                })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setnomeTime(valor)}
                />

                <Campo 
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setcorTime(valor)}
                />

                <Botao>Criar um novo time</Botao> 
            </form>
        </StyledFormulario>
    )
}

export default Formulario