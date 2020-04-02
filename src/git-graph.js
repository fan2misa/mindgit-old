
export const radius = 10;
export const marge = 5;
export const arcRadius = 10;
export const branchLevelColors = [
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#f9ca24',
    '#d35400',
    '#c0392b',
    '#7f8c8d',
];

export const getColorByLevel = level => branchLevelColors[((level - 1) % branchLevelColors.length)];