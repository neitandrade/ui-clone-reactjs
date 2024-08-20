import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
    // display: flex;
    algin-items: center; //V
    justify-content: center; //H
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
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: ''; //OBRIGATÓRIO PARA FUNCIONAR
        display: ${(props) => props.hasNotifications ? 'inline' : 'none'} 
    }
    &::after{
        background-color: var(--notification);
        width: auto;
        heihgt: 16px;
        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--terciary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${(props) => props.mentions && props.mentions}'; //Se tiver menções, pega o nº de menções
        display: &{(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
        }

    transition: border-radius .2s, background-color .2s;

    &.activate, &:hover {
        border-radius: 16px;
        background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)}'
    }
`;