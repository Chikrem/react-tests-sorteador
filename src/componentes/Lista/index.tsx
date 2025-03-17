import { useListaDeNomes } from './../../state/hooks/useListaDeParticipantes';

import './estilos.css'

const ListaNomes = () => {

    const nomes: string[] = useListaDeNomes()

    return (
        <ul className='lista'>
            {nomes.map( nome => <li key={nome} className='item'>{nome}</li>)}
        </ul>
    );
}

export default ListaNomes;