import styled from "styled-components";
import { Hashtag } from '@styled-icons/heroicons-outline';

// Copia o import, seleciona todas as virgulas com ctrl + d, e exporta aqui.

export const Container = styled.div`
    grid-area: CI;
    display: flex;
    align-items: center;
    padding: 0 17px;
    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2; //Sobressair na camada de outros componentes
`;


// Chama a função 
export const HashtagIcons = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`;

export const Tittle = styled.div``;

export const Separator = styled.div``;

export const Description = styled.div``;
