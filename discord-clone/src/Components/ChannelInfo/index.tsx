// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

// Exportamos por padrão o nosso componente que é uma função:
// export default function Layout( ) {
// return(...)
//}; <-- Igual ao const Layout, só que sem especificar ao TypeScript que é um componente react.

import { Container, HashtagIcons, Tittle, Separator, Description} from './styles'; // Importa o componente Grid do arquivo styles.ts

// React.FC --> Especifica pro TypeScript que estamos criando um componente react.
const ChannelInfo: React.FC = () => {
    return (
       <Container>
        <HashtagIcons />
        <Tittle>chat-livre</Tittle>
        <Separator />
        <Description>Canal aberto para conversas</Description>
       </Container>
    );
}

export default ChannelInfo;