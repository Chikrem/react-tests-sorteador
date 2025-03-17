import { useRecoilState } from "recoil"
import { listaDeParticipantes } from './../atom';

export const useAdicionaNaLista = () => {
    const [participantes, setParticipantes] = useRecoilState(listaDeParticipantes)
    const adicionarParticipantes = (nome: string) => {
        if (nome.trim()) {
            setParticipantes([...participantes, nome])
        }
    }
    console.log(participantes)
    return adicionarParticipantes;
}