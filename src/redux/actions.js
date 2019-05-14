// types of action
const Types = {
    LOGIN: "LOGIN",
    LOG_OUT: "LOG_OUT"
};
// actions
const login = value => ({
    type: Types.LOGIN,
    payload: value
});

const logout = id => ({
    type: Types.LOG_OUT,
    payload: id
});

export default {
    login,
    logout,
    Types
};