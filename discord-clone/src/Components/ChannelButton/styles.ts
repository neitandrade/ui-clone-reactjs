import styled from "styled-components";
import { HiHashtag } from "react-icons/hi2";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;

    transition: background-color 0.2s;

    > div {
      display: flex;
      align-items: center;   
    }

    > div span {
      margin-left: 5px;
      color: var(--senary);
    }

    div:last-child {
      display: none; /* Esconde os ícones por padrão */
      transition: display 0.5s;
    }

    &:hover, &.active {
      background-color: var(--quinary);
    
      > div span {
        color: var(--white); 
      }

      > div:last-child {
        display: flex;
      }
    }
`;
export const HashtagIcon = styled(HiHashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(IoPersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  margin-right: 4px;
`;

export const SettingsIcon = styled(IoMdSettings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  margin-right: 4px;
`;