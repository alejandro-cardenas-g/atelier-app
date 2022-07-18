import { notification } from "antd";

export const notificationErrorV1 = (message: string) => {
    notification.error({
        message: 'Error',
        description: message || '',
        duration: 1.5,
        placement: 'topRight',
        className: 'notification-1'
    })
}

