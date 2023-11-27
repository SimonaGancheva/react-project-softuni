const itemName = 'userData';

export const getUserData = () => {
    return JSON.parse(localStorage.getItem(itemName));
}

export const setUserData = (data) => {
    return localStorage.setItem(itemName, JSON.stringify(data));
}

export const clearUserData = () => {
    localStorage.removeItem(itemName);
}

export const createSubmitHandler = (callback) => {
    return function(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data, form);
    }
}