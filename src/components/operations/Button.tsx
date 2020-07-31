import React, { FC } from 'react';

export const Button: FC<{ onPress: Function }> = ({ children, onPress }) => {
    return <button onClick={() => onPress()} style={styles}>{children}</button>
};

const styles = {
    margin: 4,
    backgroundColor: "black",
    color: "white",
    padding: 8,
    borderRadius: 8,
    textTransform: 'uppercase' as 'uppercase',
    paddingLeft: 32,
    paddingRight: 32
};
