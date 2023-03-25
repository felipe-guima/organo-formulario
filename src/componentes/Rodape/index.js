//src/componentes/Rodape/index.js

import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/AluraCursosOnline" target=" ">
                        <img src="/imagens/fb.png" alt="logo facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/AluraOnline" target=" ">
                        <img src="/imagens/tw.png" alt="logo twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aluraonline/" target=" ">
                        <img src="/imagens/ig.png" alt="logo instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="logo organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Felipe.
            </p>
        </section>
    </footer>)
}

export default Rodape