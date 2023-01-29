import {showNotification} from "@mantine/notifications";

export const orderSuccessfulNotification = () => {
    showNotification({
        color: 'green',
        title: 'Successful',
        message: 'The order has been accepted. We will contact you when your order is ready',
    })
}

export const orderBadNotification = () => {
    showNotification({
        color: 'red',
        title: 'Error',
        message: 'Something is wrong',
    })
}
