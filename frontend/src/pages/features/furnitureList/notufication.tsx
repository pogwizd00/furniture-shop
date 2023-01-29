import {showNotification} from "@mantine/notifications";


export const notificationAterAddFurnitureToUser = () => {
    showNotification({
        color: 'yellow',
        title: 'Successful',
        message: 'Product has been added to the basket',
    })
}

export const notificationUserIsNotLoggedOrProductIsAlreadyInBasket = () => {
    showNotification({
        color: 'yellow',
        message: 'Product is already in the shopping basket or you are not logged in'
    })
}

export const notificationRemoveFurnitureFromBasket = () => {
    showNotification({
        color: 'yellow',
        title: 'Successful',
        message: 'Product has been removed from the basket'
    })
}