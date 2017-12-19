export const USER_DATA = 'user_data';

export const handleData = (data) => {
    return {
        type: USER_DATA,
        payload: data
    };
}