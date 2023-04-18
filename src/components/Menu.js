import '../styles/Menu.scss'

function Menu(props) {
    const {onMenuItemClick} = props

    // Função para lidar com o clique nos itens do menu
    const handleClick = (item) => {
        onMenuItemClick(item);
    };
    return (
        <div className="header">
            <ul>
                <li onClick={() => handleClick('Introdução')}>Introdução</li>
                <li onClick={() => handleClick('Web Design')}>Web Design</li>
                <li onClick={() => handleClick('Encerramento')}>Encerramento</li>
            </ul>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="spider web"/>
                <div>
                    <span className='web'>WEB</span>
                    <span className='design'>DESIGN</span>
                </div>
            </div>
        </div>
    );
}

export default Menu;
