import React, { useState } from 'react';
import { generateColors } from '../../utils/randomize';

export const ColorsExercisePage = () => {
    const [colors] = useState(generateColors(100));

    return (
        <div>
            <h2>Ejercicio 1</h2>
            {
                colors.map((color, index) => (
                    <div style={{ backgroundColor: color, height: 20 }}>{index + 1}</div>
                ))
            }
        </div>
    );
};
