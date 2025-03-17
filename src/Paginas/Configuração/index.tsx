import React from "react"

import Card from "../../componentes/Card"
import Formulario from "../../componentes/Form/Formulario"
import ListaNomes from './../../componentes/Lista/index';
import Rodape from "../../componentes/Rodape";

const Configuracao: React.FC = ({ children }) => {
    return (
        <>
        <Card>
            <h1>Vamos Começar!</h1>
            <Formulario />
            <ListaNomes />
            <Rodape />
        </Card>
    </>
    )
}

export default Configuracao