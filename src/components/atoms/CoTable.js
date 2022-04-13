import React from 'react';
import { Button } from 'antd';
import TableCotainer from './CoTable.styled';
import PropTypes from 'prop-types';

function TableHead(props){
    const { data, ...rest } = props;
    return (
        <thead>
            {
                data.map((data) => <tr>{data.map((data) =>{
                    return (<th {...data.props}>{data.text}</th>)
                })}</tr>)
            }
        </thead>
    )
}

function TableBody(props){
    const { ...rest } = props;
    return (
        <tbody>
            <tr>
                <td>dfdsf</td>
                <td>dfd111sf</td>
                <td>dfdsf</td>
                <td>dfdsf11</td>
            </tr>
        </tbody>
    )
}

function CoTable(props) {
    const { dataHead, ...rest } = props;
    return (
        <TableCotainer>
            <table>
                {dataHead && <TableHead data={dataHead} />}
                <TableBody />
            </table>
        </TableCotainer>
    )
}

export default CoTable;


CoTable.propTypes = {
    /**
     * 버튼 사이즈 [large, ]
    */
    size:PropTypes.string,
    /**
     * test
    */
    shape:PropTypes.string
    /**
     * test*/,
    color:PropTypes.string
    /**
     * test
    */,
    icon:PropTypes.string,
    /**
     * test
    */
    block:PropTypes.bool,
    /**
     * test
    */
    danger:PropTypes.bool,
    /**
     * test
    */
    disabled:PropTypes.bool,
    /**
     * test
    */
    ghost:PropTypes.bool,
    /**
     * test
    */
    loading:PropTypes.bool,
};