// Todo arquivo tsx vai ter um import React from "react" 

import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from "../ChannelMessage";

// 
const ChannelData: React.FC = () => {

    return (
       <Container>
        <Messages>
            <ChannelMessage 
                autor="Neitandrade"
                data="13/10/2023"
                content="Qualquer coisa só pra botar aqui..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            <ChannelMessage 
                autor="Deepsix"
                data="13/10/2023"
                content="Voce é um lindo!..."
            />
            
            <ChannelMessage 
                autor="Neitandrade"
                data="13/10/2023"
                content="Lorem ipsum kkkkkkkkk..."
            />
            <ChannelMessage 
                autor="DanLira"
                data="13/10/2023"
                content={
                <>
                    <Mention>@Neitandrade</Mention>, qual foi esse Discord aí ?
                </>}
                hasMention
                isBot
            />
        </Messages>

        <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
        </InputWrapper>
       </Container>
    );
}

export default ChannelData;