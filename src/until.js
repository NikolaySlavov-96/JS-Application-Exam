export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    return sessionStorage.setItem('userData', JSON.stringify(data));
}

export function removeUserData() {
    return sessionStorage.removeItem('userData');
}

export function submitHandler(callback) {
    return function (ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const dataUser = Object.fromEntries([...formData]);

        callback(dataUser, ev.target)
    }
}