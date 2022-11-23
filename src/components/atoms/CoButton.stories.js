import React from "react";
import { CoButton } from "../atoms";
import * as Cpnt from "../atoms";

const Arr = [];

const key = Object.keys(Cpnt);
let i = 0
for (; i < key.length; i++) {
    Arr.push(Cpnt[key[i]])
}

console.log(Arr)

const TestBtn = {
    title:CoButton
};
export default {
    title: "atomic/CoButton",
    component: CoButton,
    description:'sdfsdfsdfsdfsdf',
    argTypes: {
        size: {
            defaultValue : 'middle',
            options: ['large', 'middle', 'small'],
            control: { type: 'select' },
            description: 'demo 22',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Hello' },
            },
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
const Template = (args) => {
    return (
        <>
            {
                Arr.map((Prop, i) => <Prop key={i} label="dfd3333sfsdfd222sfsd" />)
            }
        </>
    )
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   label: 'ewrewsdfsd',
};
Primary.parameters = {
    docs: {
      description: {
        docs: "232 story description, may contain `markdown` markup"
      },
    },
  };
console.dir(Primary)

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
