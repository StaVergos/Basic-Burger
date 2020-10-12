import React from "react";

import BuildControl from './Build Control/BuildControl'

import classes from './BuildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=>props.ingredientAdded(ctrl.type)}
            />
        ))}
    </div>
);

export default buildControls;