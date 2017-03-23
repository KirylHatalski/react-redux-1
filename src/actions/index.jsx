export const FROM_PATTERN_CHANGED = 'FROM_PATTERN_CHANGED';
export const TO_PATTERN_CHANGED = 'TO_PATTERN_CHANGED';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const changeFromPattern = (pattern) => {
    return {type: FROM_PATTERN_CHANGED, payload: pattern}
}

export const changeToPattern = (pattern) => {
    return {type: TO_PATTERN_CHANGED, payload: pattern}
}

export const changeInput = (value) => {
    return {type: CHANGE_INPUT, payload: value}
}
