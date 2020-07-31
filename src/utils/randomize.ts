const getRandomColor = (): string => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const generateColors = (length: number): string[] => {
    const colors = [];
    let currentColor = '';

    for (let i = 0; i < length; i ++) {
        currentColor = getRandomColor();
        colors.push(currentColor);
    }

    return colors;
};
