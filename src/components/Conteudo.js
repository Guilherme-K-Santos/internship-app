import '../styles/Conteudo.scss'
import SliderItem from './SliderItem';

function Conteudo() {
    return (
        <div className="content">
            <p className="main-p-format">
                Como todo trabalho de design, ele é um projeto, e necessita de uma 
                análise informacional, a partir de um briefing. Detectar corretamente 
                o objetivo do projeto é essencial para um bom planejamento, de modo que a
                s ações sejam tomadas de forma correta.
            </p>

            <div className='destaque'>
                <p>
                    É sempre necessário definir o público alvo do site, o objetivo, os serviços 
                    oferecidos, o diferencial para o público. A partir desses e de outros 
                    elementos que sejam especificamente relevantes ao projeto, será definida 
                    a estrutura do site (Arquitetura de informação), a tecnologia empregada e o layout.
                </p>
            </div>

            <p className="main-p-format">
                De uma forma geral, embora usualmente possa parecer que a primeira impressão que se 
                tem de um site é o visual, na verdade o visitante busca o conteúdo, por esse motivo 
                o primeiro passo estratégico é definir bem todas as informações que o site terá, definir 
                claramente a arquitetura de informação do site e por último, o design visual do site, 
                que não precisa pular, girar e piscar, a não ser que o que se esteja vendendo é design/imagem 
                (que não se aplica ao meio informacional que é a Web), mas ter um aspecto profissional seguindo 
                pelo menos os conceitos básicos do design como aproximação, contraste, alinhamento, dentre outros.
            </p>

            <div className="slider">
                <SliderItem
                    title="Diferança Conceitual"
                    text="Há uma diferença conceitual marcante entre design nos meios tradicionais, como no gráfico 
                    e o design aplicado na web. Na web, a estética deve ser moldada ao dispositivo que acessa ao 
                    site ou mesmo desabilitada caso não seja necessária no contexto de utilização."
                />
                <SliderItem
                    title="Previsão"
                    text="No meio gráfico é possível prever como o usuário final verá a estética do produto, já na 
                    web isto não é possível, pois a aparência pode e deve mudar radicalmente de acordo com o sistema 
                    operacional utilizado, configurações pessoais, navegadores, resoluções de tela e dispositivos, 
                    como celular, TV, impressora, leitores de telas etc."
                />
            </div>

            <p className="main-p-format">
                Por este motivo, a estrutura (HTML) com a qual a informação será exposta deve trabalhar independentemente 
                da formatação estilística (CSS) e do comportamento (scripts), que são recomendações do W3C.
            </p>
            <p className="main-p-format">
                A estrutura, também conhecida como arquitetura de informação do site, deve contemplar seu objetivo: 
            </p>

            <ul className="topicos">
                <li>
                    <img src={process.env.PUBLIC_URL + '/images/arrow_icon.png' } alt="arrow"/>
                    <h3>Usabilidade</h3>
                    <p>Tornando a experiência do usuário a mais confortável e fácil possível, chamamos isso de usabilidade.</p>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/images/arrow_icon.png' } alt="arrow"/>
                    <h3>Estrutura</h3>
                    <p>Deve-se planejar a estrutura de forma que o usuário obtenha facilmente a informação ou serviço desejado.</p>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/images/arrow_icon.png' } alt="arrow"/>
                    <h3>Criatividade</h3>
                    <p>Hoje em dia são inúmeras as formas que um site pode adquirir e a criatividade continua ser o grande diferencial na produção de web.</p>
                </li>
            </ul>
        </div>
    );
};

export default Conteudo;