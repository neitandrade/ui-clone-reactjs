// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

// Exportamos por padrão o nosso componente que é uma função:
// export default function Layout( ) {
// return(...)
//}; <-- Igual ao const Layout, só que sem especificar ao TypeScript que é um componente react.

// !Sempre que criarmos um componente, ele deve ser importado aqui.

import { Grid } from './styles'; // Importa o componente Grid do arquivo styles.ts

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
// import ChannelList from '../ChannelList';

// Especifica pro TypeScript que estamos criando um componente react.
const Layout: React.FC = () => {
    return (
       <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        {/* <ChannelList /> */}
       </Grid>
    );
}

export default Layout;