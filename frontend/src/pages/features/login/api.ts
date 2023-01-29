import {API_URL} from "../../../config";

export const signIn = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            ContentType: 'application/json',
            Authorization: 'Basic ' + window.btoa(username + ":" + password)
        },
        credentials: 'include' // jesli nie zaznacze to fetch zignoruje cookiesy
    });
    // console.log(response.text());
    if (response.status !== 200) throw new Error('Login Failed');
    return await response.text();

}

