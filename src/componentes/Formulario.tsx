import React, { useRef, useState } from 'react';
import { useAdicionaNaLista } from '../state/hooks/adicionarParticipante';

const Formulario = () => {

    // Guardar nome recebido do input form
    const [nome, setNome] = useState<string>('');

    // Recuperar o método de adição na lista com hook personalizado
    const AdicionaNaLista = useAdicionaNaLista();

    const inputRef = useRef<HTMLInputElement>(null)

    // Função para passar o nome guardado ao método de adição e adicionar novo valor a lista
    const adicionarParticipante = (event: React.FormEvent) => {
        event.preventDefault();
        if (nome.trim()) {
            AdicionaNaLista(nome);
            setNome('');
            inputRef.current?.focus()
        }
    };

    return (
        <form onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Insira os nomes dos participantes"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button type="submit" disabled={!nome.trim()}>Adicionar</button>
        </form>
    );
};

export default Formulario;