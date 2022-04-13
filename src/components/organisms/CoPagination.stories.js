import React from "react";
import CoPagination from "./CoPagination";


export default {
    title: "organisms/CoPagination",
    component: CoPagination,
    argTypes: {
        size: {
            defaultValue : 'middle',
            options: ['large', 'middle', 'small'],
            control: { type: 'select' },
        },
        shape : {
            defaultValue : 'default',
            options: ['default', 'circle', 'round'],
            control: { type: 'select' },
        },
        color : {
            defaultValue : 'default',
            options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default', 'loading'],
            control: { type: 'select' },
        },
        icon: {
            defaultValue : '',
            control: { type: 'text' },
        },
        block : {
            defaultValue : false,
            control: { type: 'boolean' },
        },
        danger : {
            defaultValue : false,
            control: { type: 'boolean' },
        },
        disabled : {
            defaultValue : false,
            control: { type: 'boolean' },
        },
        ghost : {
            defaultValue : false,
            control: { type: 'boolean' },
        },
        loading : {
            defaultValue : false,
            control: { type: 'boolean' },
        },
    },
};


//👇 We create a “template” of how args map to rendering
const Template = (args) => <CoPagination {...args} />;

//👇 Each story then reuses that template
export const Page = Template.bind({});
Page.args = {
   label: 'Button',
};