import styled from 'styled-components';
import { ButtonStyle, device } from '../styled/common';

function func(arr) {
    return `&:after{
        content:'';
        display:block;
        width:10px;
        height:10px;
        background:#f00;
    }`
}





const ButtonCotainer = styled.div`
    ${ButtonStyle};
    @media ${device.tablet} {
        border-color: #ff0;
    }
    @media ${device.mobile} {
        border-color: #f0f;
    }
    display: inline-block;
    ${func('plus')}
`;

export default ButtonCotainer;