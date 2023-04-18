import '../styles/Introducao.scss'

function Introducao() {
    return (
        <div className="introduction">
            <p className='first-paragraph'>
                O web design é uma extensão da prática do design gráfico, onde o foco do projeto 
                é a criação de web sites e documentos disponíveis no ambiente da World Wide Web.
            </p>

            <div className='second-paragraph'>
                <p className='first-p-second-paragraph'>
                    O web design tende à multidisciplinaridade, uma vez que a construção de páginas 
                    web requer subsídios de diversas áreas técnicas, além do design propriamente dito. 
                    Áreas como a arquitetura da informação, programação, ergonomia,[1] usabilidade, 
                    acessibilidade entre outros. 
                </p>
                <p>
                    A preocupação fundamental do web designer é agregar os conceitos de usabilidade 
                    e experiência do usuário ao design do site, garantindo que o usuário final atinja 
                    seus objetivos de forma agradável e intuitiva.
                </p>
            </div>
        </div>
    );
}

export default Introducao;