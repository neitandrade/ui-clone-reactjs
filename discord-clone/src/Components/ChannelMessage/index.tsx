// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

import { Container } from './styles';
import { Avatar } from "../UserInfo/styles";

export interface Props {
    autor: string;
    data: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention ?: boolean;
    isBot ?: boolean;
}

// 
const ServerName: React.FC = () => {
    return (
       <Container>
        <Avatar />
        <Message>
            <Header>
                <strong>Neitandrade</strong>

                {isBot && <span>Bot</span>} 

                <time>13/10/2023</time>
            </Header>
            <Content>

            </Content>
        </Message>
       </Container>
    );
}

export default ServerName;