import styled from 'styled-components';
import { ButtonStyle, device } from '../styled/common';


const TableCotainer = styled.div`
    /* display: inline-block; */
    th{
        background-color: #f00;
    }
    table, th, td{
        border:4px solid red;
    }
`;

export default TableCotainer;