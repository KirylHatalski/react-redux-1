export const ALIVE = 'ALIVE';
export const PATTERN_CHANGED = 'PATTERN_CHANGED';

export const throwClick = () => {
    return {type: ALIVE, payload: 'piy'}
}

export const changePattern = (pattern) => {
    return {
        type: PATTERN_CHANGED,
        payload: {
            pattern: pattern
        }
    }
}
