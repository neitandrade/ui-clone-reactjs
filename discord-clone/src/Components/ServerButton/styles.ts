import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
    // display: flex;
    // algin-items: center; //V
    // justify-content: center; //H
    flex-shrink: 0; // Não permite que o botão seja compresso

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'}; //
    // Se for o botão da home, irá ter a cor da rocketseat, se não, a cor primária.

    position: relative; // Permite alterar a posição da hasNotification
    cursor: pointer;

    > img { //Diminuir imagem
        width: 24px;
        height: 24px;
        
    }

    // REGRAS CSS:

    &::before{
        height: 9px;
        width: 9px;

        position: absolute; //SO FUNCIONA SE HOUVER UM POSITION RELATIVE
    }
    &::after{}


    transition: border-radius .2s, background-color .2s;
    &.activate, &:hover {
        border-radius: 16px;
        background: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)}'
    }
`;