import styled from "styled-components";

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info
//

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 71px 240px auto 240px; // Largura
    grid-template-rows: 46px auto 52px; // Altura
    grid-template-areas:
    'SL SN CI CI' // Ocupam a header
    'SL CL CD UL' // Ocupam o corpo
    'SL UI CD UL'; // Ocupam o footer

    height: 100vh;
`;