import { notification } from "antd";

export const notificationErrorV1 = (message: string, duration = 1.5) => {
    notification.error({
        message: 'Error',
        description: message || '',
        duration,
        placement: 'topRight',
        className: 'notification-1'
    })
}

