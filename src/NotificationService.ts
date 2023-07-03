import {getNotificationToken} from "./firebase";

export function initializeNotification(message: string = "Test Notification") {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        let notification = new Notification(message);
        getNotificationToken()
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                let notification = new Notification(message);
                getNotificationToken()
            }
        });
        Notification.requestPermission(() => {
            // If the user accepts, let's create a notification
            if (Notification.permission === "granted") {
                let notification = new Notification(message);
                getNotificationToken()
            }
        })
    }
}
