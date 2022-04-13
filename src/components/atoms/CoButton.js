import React from 'react';
import { Button } from 'antd';
import ButtonCotainer from './CoButton.styled';
import PropTypes from 'prop-types';

function CoButton(props) {
    const { label, handleClick, disabled, ...rest } = props;
    return (
        <ButtonCotainer>
            <Button 
                type={props.color} 
                onClick={handleClick}  
                disabled={disabled} 
                size={props.size} 
                block={props.block}
                loading={props.loading}
                shape={props.shape}
                icon={props.icon}
            >
                {label}
            </Button>
        </ButtonCotainer>
    )
}

export default CoButton;


CoButton.propTypes = {
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