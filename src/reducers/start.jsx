const start = (state = [], action) => {
    switch (action.type) {
        case 'ALIVE':
            return [
                ...state,
                checker(action.payload.started)
            ]
        default:
            return state
    }
}

function checker(action) {
    console.log(action);
}

export default start
