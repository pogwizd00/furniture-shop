import {showNotification} from "@mantine/notifications";

export const updateSuccessfulNotification = () => {
    showNotification({
        color: 'green',
        title: 'Successful',
        message: 'Your data were update correctly :D',
    })
}

export const updateErrorNotification = () => {
    showNotification({
        color: 'red',
        title: 'Error',
        message: 'Something is wrong :((',
    })
}