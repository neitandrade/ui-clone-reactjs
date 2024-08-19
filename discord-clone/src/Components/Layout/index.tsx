// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

// Exportamos por padrão o nosso componente que é uma função:
// export default function Layout( ) {
// return(...)
//}; <-- Igual ao const Layout, só que sem especificar ao TypeScript que é um componente react.

import { Grid } from './styles'; // Importa o componente Grid do arquivo styles.ts
import ServerList from "../ServerList";

// Especifica pro TypeScript que estamos criando um componente react.
const Layout: React.FC = () => {
    return (
       <Grid>
        <ServerList />
       </Grid>
    );
}

export default Layout;