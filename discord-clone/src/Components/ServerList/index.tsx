import React from 'react';
import { Container, Separator } from './styles';
import { Server } from 'http';

import ServerButton from '../ServerButton';


const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />

        </Container>
    )
    
};

export default ServerList;