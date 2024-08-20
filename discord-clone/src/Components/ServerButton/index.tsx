import React from 'react';
import { Button } from './styles';
import Logo from '../../assets/LogoRocketseat.svg';

// as props são mecanismos que permitem transmitir dados de um componente pai para um componente filho
// conectar os componentes entre si  
export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Home" />}
        </Button>
    )
};

export default ServerButton;