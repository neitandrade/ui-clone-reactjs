// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';


export interface Props {
    autor: string;
    data: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention ?: boolean;
    isBot ?: boolean;
}

// 
const ChannelMessage: React.FC<Props> = ({
    autor, data, content, hasMention, isBot,
}) => {
    return (
       <Container className={hasMention ? 'mention' : ''}>
        <Avatar className={isBot ? 'bot' : ''} />
        <Message>
            <Header>
                <strong>{autor}</strong>

                {isBot && <span>Bot</span>} 

                <time>{data}</time>
            </Header>
            <Content>
                {content}
            </Content>
        </Message>
       </Container>
    );
}

export default ChannelMessage;