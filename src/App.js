import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import styled from 'styled-components';


const StyledApp = styled.div`
background-color: #fff;
`

function App() {

  const times = [
    {
      nome: 'Fluxo',
      corPrimaria: '#000',
      corSecundaria: '#5f02e7'
      
    },
    {
      nome: 'FURIA',
      corPrimaria: '#000',
      corSecundaria: '#808080'
    },
    {
      nome: 'INTZ',
      corPrimaria: '#000',
      corSecundaria: '#c0c0c0'
    },
    {
      nome: 'KaBuM',
      corPrimaria: '#000',
      corSecundaria: '#fc6904'
    },
    {
      nome: 'Liberty',
      corPrimaria: '#000',
      corSecundaria: '#00e8e8' 
    },
    {
      nome: 'Los Grandes',
      corPrimaria: '#000',
      corSecundaria: '#ff6600'
    },
    {
      nome: 'LOUD',
      corPrimaria: '#000',
      corSecundaria: '#40ff40'
    },
    {
      nome: 'Pain Gaming',
      corPrimaria: '#000',
      corSecundaria: '#ea2e46'
    },
    {
      nome: 'RED Canids Kalunga',
      corPrimaria: '#000',
      corSecundaria: '#ef384d'
    },
    {
      nome: 'Vivo Keyd Stars',
      corPrimaria: '#000',
      corSecundaria: '#5c2a82'
      
    }
  ]
  
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

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    
    <StyledApp className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} roles={roles.map(role => role.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
      
      
    </StyledApp>
  );
}

export default App;
