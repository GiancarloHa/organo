import styled from "styled-components"

const StyledListaSuspensa = styled.div`
    label{
        display: block;
        margin-bottom: 8px;
        font-size: 24px;
    }
    select {
        background-color: #fff;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        width: 100%;
        border: none;
        font-size: 24px;
        padding: 24px;
        box-sizing: border-box;
    }
`

const ListaSuspensa = (props) => {
    return (
        <StyledListaSuspensa>
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""/>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </StyledListaSuspensa>
    )
}

export default ListaSuspensa