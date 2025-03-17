import { useRecoilValue } from "recoil"
import { listaDeParticipantes } from "../atom"

export const useListaDeNomes= () => {
    return useRecoilValue(listaDeParticipantes)
}