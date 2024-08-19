// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

// Exportamos por padrão o nosso componente que é uma função:
// export default function Layout( ) {
// return(...)
//}; <-- Igual ao const Layout, só que sem especificar ao TypeScript que é um componente react.

import { Container, Tittle } from './styles'; // Importa o componente Grid do arquivo styles.ts

// Especifica pro TypeScript que estamos criando um componente react.
const ServerName: React.FC = () => {
    return (
       <Container>
        <Tittle> Servidor com Momo </Tittle>
        {/* <ExpandIcons /> */}
       </Container>
    );
}

export default ServerName;