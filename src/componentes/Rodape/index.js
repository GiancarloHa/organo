import styled from "styled-components";

const StyledRodape = styled.footer`
    background: #000;
    color: #FFF;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul li {
        display: inline-block;
        margin-right: 32px;
    }

    ul li:last-child {
        margin-right: 0px;
    }
`




const Rodape = () => {
    return (
        <StyledRodape>
            <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/giancarlo-habeck-82a17a210/">
                        <img src="imagens/linkedin.png" alt="linkedin"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GiancarloHa">
                        <img src="imagens/GitHub-Icon-White.png" alt="github"/>
                    </a>
                </li>
            </ul>
            </section>
            <section>
            <img src="imagens/logo-cblol-fundo100.png" alt="a"/>
            </section>
            <section>
                <p>
                    gianhabeck@gmail.com
                </p>
            </section>
        </StyledRodape>
    );
}

export default Rodape;