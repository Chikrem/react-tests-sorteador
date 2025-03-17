import { useNavigate } from "react-router-dom"
import { useListaDeNomes } from "../../state/hooks/useListaDeParticipantes";
import "./estilos.css"

const Rodape = () => {

    const participantes = useListaDeNomes()

    const navegarPara = useNavigate()

    const iniciar = () => (
        navegarPara("/sorteio")
    )

    return (
        <footer className="rodape-configuracoes"> 
            <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
                
                Começar Brincadeira
            </button>
            <img src="/imagens/sacolas.png" alt="imagem sacolas"/>
        </footer>
    )
}

export default Rodape;