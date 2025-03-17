import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantes } from "../atom"

export const useAdicionaNaLista = () => {
    const setLista = useSetRecoilState(listaDeParticipantes)
    const lista = useRecoilValue(listaDeParticipantes)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante) && nomeDoParticipante !== null) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}