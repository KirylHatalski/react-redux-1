export const FROM_PATTERN_CHANGED = 'FROM_PATTERN_CHANGED';
export const TO_PATTERN_CHANGED = 'TO_PATTERN_CHANGED';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SAVE_LOG = 'SAVE_LOG';
export const GET_FROM_LOG = 'GET_FROM_LOG';

export const changeFromPattern = (pattern) => {
    return {type: FROM_PATTERN_CHANGED, payload: pattern}
}

export const changeToPattern = (pattern) => {
    return {type: TO_PATTERN_CHANGED, payload: pattern}
}

export const changeInput = (value) => {
    return {type: CHANGE_INPUT, payload: value}
}

export const saveToLog = (data) => {
    return {type: SAVE_LOG, payload: data}
}

export const getFromLog = (value) => {
    return {type: GET_FROM_LOG, payload: value}
}

export const getPatterns = (store) => {
    switch (store.routing.locationBeforeTransitions.pathname) {
        case '/length':
            return store.convertor.patterns.length
        case '/weight':
            return store.convertor.patterns.weight
        case '/currency':
            return store.convertor.patterns.currency
        default:
            return store.convertor.patterns.length
    }
}

export function findElem(root, pattern){
  for(let i = root.children.length; i--;){
    if(root.children[i].innerHTML == pattern) return root.children[i]
  }
}

export const initGetFromLog = (value) => {
  let inputCol = document.querySelectorAll('.pattern'),
      input = findElem(inputCol[0], value.input.name),
      output = findElem(inputCol[1], value.output.name)
  input.setAttribute('selected', true)
  output.setAttribute('selected', true);
  return getFromLog(value)
}


export function findField(objArr, field ,pattern) {
    for (var i = objArr.length; i--;) {
        if (objArr[i].index == pattern)
            return (field) ? objArr[i][field] : objArr[i];
        }
    }
