import React, { useState } from 'react'
import Menu from './Menu';
import Introducao from './Introducao';
import Conteudo from './Conteudo';
import Encerramento from './Encerramento';
import '../styles/App.scss'

function App() {
  // hooks
  const [background, setBackground] = useState('/images/introduction.jpg'); // Estado para o fundo
  const [title, setTitle] = useState('Introdução'); // Estado para o fundo

  const [activeComponent, setActiveComponent] = useState('Introducao'); // Estado para o componente ativo

  // Função para trocar o componente ativo com base no item do menu clicado
  const handleMenuItemClick = (item) => {
    setTitle(item); // Atualiza o título com base no item do menu clicado

    // Define o componente ativo com base no item do menu clicado
    if (item === 'Introdução') {
      setActiveComponent('Introducao');
      setBackground('/images/introduction.jpg')
    } else if (item === 'Web Design') {
      setActiveComponent('Web Design');
      setBackground('/images/conteudo.jpg');
    } else if (item === 'Encerramento') {
      setActiveComponent('Encerramento');
      setBackground('/images/encerramento.jpg')
    }
  };

  // Renderiza o componente ativo com base no estado activeComponent
  const renderActiveComponent = () => {
    if (activeComponent === 'Introducao') {
      return <Introducao />;
    } else if (activeComponent === 'Web Design') {
      return <Conteudo />;
    } else if (activeComponent === 'Encerramento') {
      return <Encerramento />;
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + background})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Menu onMenuItemClick={handleMenuItemClick} />
      <p className='title'>{title}</p>
      {renderActiveComponent()}
      <footer></footer>
    </div>
  );
}

export default App;
