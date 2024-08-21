import styled from "styled-components";

export const Container = styled.div`
    grid-area: UL;

    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;
    background-color: var(--secondary);

    max-height: calc(100vh - 46px); //Altura máxima da tela menos a CHANNEL INFO
    // overflow-y: scroll; // NÃO FUNCIONA WEBKIT NO MEU COMPUTADOR ?

    // ::-webkit-scrollbar {
    //     width: 4px;
    // }

    // ::-webkit-scrollbar-thumb { // COR DA SCROLLBAR + BORDA ARREDONDADA
    //     background-color: var(--tertiary);
    //     border-radius: 4px;
    // }

    // ::-webkit-scrollbar-track { // FUNDO DA SCROLLBAR 
    //     background-color: var(--secondary);
    // }
`;

export const Role = styled.span`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    color: var(--gray);
    font-weight: 500;
`;

export const User = styled.div`
padding: 5px;
margin-top: 5px;

display: flex;
align-items: center;
color: var(--gray);

cursor: pointer;

border-radius: 4px;
traisition: background .2s;

&:hover {
    background-color: var(--quinary);
}

> strong {
    margin-left: 13px;
    font-weight: 500;
    opacity: 0.7;

    white-space: nowrap; // Não permite quebrar linha
    text-overflow: ellipsis; // Se o texto for muito grande, ele vai cortar e colocar ...
    overflow: hidden; // Todo texto fora da div não aparecerá

    &:hover {
    color: var(--white);
    }
}

> span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    font-size: 11px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
}

`;

export const Avatar = styled.div`

flex-shrink: 0; //Não deixa o avatar diminuir	

width: 32px;
height: 32px;
border-radius: 50%;
background-color: var(--primary);

&.bot {
    background-color: var(--mention-detail);
}

`;
