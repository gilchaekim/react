import React from 'react';
import { Button } from 'antd';
import ButtonCotainer from './CoButton.styled';

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