import React from "react";
import CoButton from "./CoButton";


export default {
    title: "atomic/CoButton",
    component: CoButton,
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
const Template = (args) => <CoButton {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
   label: 'Button',
   color: 'ghost'
};

export const Dashed = Template.bind({});
Dashed.args = {
   label: 'Button',
   color: 'dashed'
};
