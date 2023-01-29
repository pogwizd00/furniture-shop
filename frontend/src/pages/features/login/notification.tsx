import {showNotification} from "@mantine/notifications";

export const signInErrorNotification = () => {
    showNotification({
        color: 'red',
        title: 'Error',
        message: 'Something wrong with you Email or password',
    })
}

export const signInCorrectNotifications = () => {
    showNotification({
        color: 'green',
        title: 'Succesful',
        message: 'Correct login and password',
    })
}