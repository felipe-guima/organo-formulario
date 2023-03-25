import './Colaborador.css'
//posso desestruturar a props e pegar só oque eu preciso atraves de um objeto {}
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='conteudo__card'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}

export default Colaborador