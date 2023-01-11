import styled from "styled-components";

const StyledColaborador = styled.div`
    width: 280px;
    div {
        background-color: #f0f0f0;
    }
    img {
        width: 100px;
        height: 80px;
        border-radius: 50%;
        position: relative;
        bottom: -50px;
    }
`


const Rodape = styled.div`
    background-color: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    padding-top: 90px;
    padding-bottom: 40px;
    a{
        color: #6278f7;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 8px;
        text-decoration: none;
    }
    h5{
        font-size: 18px;
        line-height: 22px;
        color: #212121;
        padding: 0 16px;
    }
`

const Colaborador = ({ nome, imagem, role, corDeFundo }) => {
    return (<StyledColaborador>
        <div style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <Rodape>
            <a href={"https://lol.fandom.com/wiki/"+nome}>{nome}</a>
            <h5>{role}</h5>
        </Rodape>
    </StyledColaborador>)
}

export default Colaborador