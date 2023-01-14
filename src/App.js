import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';


const StyledApp = styled.div`
background-color: #fff;
`

function App() {

  const [times, setTimes] =  useState ([
    {
      id: uuidv4(),
      nome: 'Fluxo',
      cor: '#5f02e7'
      
    },
    {
      id: uuidv4(),
      nome: 'FURIA',
      cor: '#808080'
    },
    {
      id: uuidv4(),
      nome: 'INTZ',
      cor: '#c0c0c0'
    },
    {
      id: uuidv4(),
      nome: 'KaBuM',
      cor: '#fc6904'
    },
    {
      id: uuidv4(),
      nome: 'Liberty',
      cor: '#00e8e8' 
    },
    {
      id: uuidv4(),
      nome: 'Los Grandes',
      cor: '#ff6600'
    },
    {
      id: uuidv4(),
      nome: 'LOUD',
      cor: '#40ff40'
    },
    {
      id: uuidv4(),
      nome: 'Pain Gaming',
      cor: '#ea2e46'
    },
    {
      id: uuidv4(),
      nome: 'RED Canids Kalunga',
      cor: '#ef384d'
    },
    {
      id: uuidv4(),
      nome: 'Vivo Keyd Stars',
      cor: '#5c2a82'
      
    }
  ])

  const roles = [
    {
      nome: 'Topo'
    },
    {
      nome: 'Selva'
    },
    {
      nome: 'Meio'
    },
    {
      nome: 'Atirador'
    },
    {
      nome: 'Suporte'
    }

  ]

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Tay',
      role: roles[0].nome,
      imagem: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d8/FLA_Tay_2022_Split_2.png',
      time: times[0].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(nome) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome));
  }
  
  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time =>{
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  return (
    
    <StyledApp className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        roles={roles.map(role => role.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      
      {times.map(time => 
      <Time 
        mudarCorDoTime={mudarCorDoTime}
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)}
      <Rodape/>
      
      
    </StyledApp>
  );
}

export default App;
