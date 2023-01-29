import {showNotification} from "@mantine/notifications";


export const notificationsLogoutSuccesfull = () => {
    showNotification({
        color: 'green',
        title: 'Succesfull',
        message: 'You have been logged out'
    })
};