import React from 'react';
import { Pagination } from 'antd';
import CoPagenationContainer from './CoPagenationStyled';

function CoPagination() {
    return (
        <CoPagenationContainer>
            <Pagination total={50} />
        </CoPagenationContainer>
     );
}

export default CoPagination;