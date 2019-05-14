import ACTIONS from "./actions";

const defaultState = {
    data: {}
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.LOGIN: {
            let data = action.payload;
            return data;
        }

        case ACTIONS.Types.LOG_OUT: {
            return state;
        }

        default:
            return state;
    }
};

export default userReducer;
