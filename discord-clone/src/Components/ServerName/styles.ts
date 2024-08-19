import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material'; //https://styled-icons.dev  
export const Container = styled.div`
    display: flex;
    background-color: var(--secondary);
    justify-content: space-between;
    align-items: center; //V
    padding: 0 11px 0 16px;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Tittle = styled.h1`
    font-size: 16px;
    color: var(--white);
    font-weight: bold;
`;

// <npm add styled-icons>
export const ExpandIcons = styled(ExpandMore)`
    width: 28px;
    height: 28px;
    var(--white);
    cursor: pointer;
`;