import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
export const Container = styled.div`
    display: flex;
    background-color: var(--secondary);
    justify-content: space-between;
    align-items: center; //V
    padding: 0 11px 0 16px;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 16px;
    color: var(--white);
    font-weight: bold;
    text-align: center;
`;

// <npm add styled-icons>
export const ExpandIcon = styled(MdExpandMore)`
    width: 28px;
    height: 28px;
    color: var(--white);
    cursor: pointer;
`;