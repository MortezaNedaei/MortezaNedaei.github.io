import {getNotificationToken} from "./firebase";

export function initializeNotification() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        getNotificationToken()
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                getNotificationToken()
            }
        });
        // Notification.requestPermission(() => {
        //     if (Notification.permission === "granted") {
        //         getNotificationToken()
        //     }
        // })
    }
}
