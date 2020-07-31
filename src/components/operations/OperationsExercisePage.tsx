import React, { useState } from 'react';
import { Button } from './Button';

export const OperationsExercisePage = () => {
    const [currentValue, setCurrentValue] = useState(0);

    const add = () => {
        setCurrentValue(currentValue + 1);
    };

    const substract = () => {
        setCurrentValue(currentValue - 2);
    };

    const divide = () => {
        setCurrentValue(currentValue / 3);
    };

    const reset = () => {
        setCurrentValue(0);
    };

    return (
        <div>
            <h2>Ejercicio 2</h2>
            <Button onPress={add}>add</Button>
            <Button onPress={substract}>substract</Button>
            <Button onPress={divide}>divide</Button>
            <Button onPress={reset}>reset</Button>

            <div style={{ fontSize: 40 }}>{currentValue}</div>
        </div>
    );
};
