// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

import { Container, Title, ExpandIcon } from './styles';

// 
const ServerName: React.FC = () => {
    return (
       <Container>
        <Title> Servidor com Momo </Title>
        <ExpandIcon />
       </Container>
    );
}

export default ServerName;