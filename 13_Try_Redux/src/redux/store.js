import { legacy_createStore as createStore} from 'redux'

const reducer = (state = 0, action) => {
    console.log(action);
    console.log(action.type);

    switch (action.type) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        default:
            return state;
    }
};

export const store = createStore(reducer);
