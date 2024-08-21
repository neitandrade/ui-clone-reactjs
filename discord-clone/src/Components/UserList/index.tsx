// Todo arquivo tsx vai ter um import React from "react" 
import React from "react";

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot ?: boolean;
}


// Componente Secundário aqui neste arquivo --> 
// Não criaremos um componente dedicado como em server button.
const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return(
      <User>
        <Avatar className={isBot ? 'bot' : ''} />
        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
      </User>
    )
}

const UserList: React.FC = () => {
    return (
       <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='Neitandrade' />
            <UserRow nickname='Momoloide' />


            <Role>Offline - 13</Role>
            <UserRow nickname='deepsix' isBot />
            <UserRow nickname='YourNameHere' />
            <UserRow nickname='YourNameHere' />
            <UserRow nickname='YourNameHere' />
            <UserRow nickname='YourNameHere' />
            <UserRow nickname='YourNameHere' isBot />
            <UserRow nickname='YourNameHere' />
            <UserRow nickname='YourNameHere' />

       </Container>
    );
}

export default UserList;