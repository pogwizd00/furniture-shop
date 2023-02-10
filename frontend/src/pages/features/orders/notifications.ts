import {showNotification} from "@mantine/notifications";

export const notificationAfterSuccessfullyDeleted = () => {
    showNotification({
        color: 'green',
        title: 'Successful',
        message: 'Product has been deleted',
    })
}
