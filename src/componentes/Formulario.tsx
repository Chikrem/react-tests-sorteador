import React, { useRef, useState } from 'react';

const Formulario = () => {
    const [participantes, setParticipantes] = useState<string[]>([]);
    const [nome, setNome] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarParticipante = (event: React.FormEvent) => {
        event.preventDefault();
        if (nome.trim()) {
            setParticipantes([...participantes, nome]);
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