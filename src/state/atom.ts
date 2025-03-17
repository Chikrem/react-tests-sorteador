import { atom } from "recoil";

export const listaDeParticipantes = atom<string[]>({
    key: 'listaDeParticipantes',
    default: []
})