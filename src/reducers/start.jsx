const start = (state = [], action) => {
    switch (action.type) {
        case 'ALIVE':
            return [
                ...state,
                checker()
            ]
        default:
            return state
    }
}

function checker() {
    console.log('piy');
}

export default start
