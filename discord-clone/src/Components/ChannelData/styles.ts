import styled from "styled-components";
import { MdOutlineAlternateEmail } from "react-icons/md";


export const Container = styled.div`
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //Distancia entre Input e ChatInfo

    background-color: var(--primary);
`;

export const Messages = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px); //Altura máxima da tela menos a CHANNEL INFO e o INPUT WRAPPER
    // overflow-y: scroll; // WEBKIT NÃO FUNCIONANDO NO MEU OPERA

    // ::-webkit-scrollbar {
    //     width: 4px;
    // }

    // ::-webkit-scrollbar-thumb {
    //     background-color: var(--tertiary);
    //     border-radius: 4px;
    // }

    // ::-webkit-scrollbar-track {
    //     background-color: var(--secondary);
    // }
`;

export const InputWrapper = styled.div`
    width: 100%; //COBRIR 100% DA LARGURA
    padding: 0 16px;
    margin-bottom: 10px;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;

    color: var(--white);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
`;

export const InputIcon = styled(MdOutlineAlternateEmail)`
    width: 20px;
    height: 20px;
    color: var(--gray);
    background: transparent;
`;
