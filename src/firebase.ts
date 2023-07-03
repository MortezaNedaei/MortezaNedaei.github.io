// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getMessaging, getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKLV5DCCrwdrk0OC0l-bORF_djLZ0iEyk",
    authDomain: "mortezanedaei-5048e.firebaseapp.com",
    projectId: "mortezanedaei-5048e",
    storageBucket: "mortezanedaei-5048e.appspot.com",
    messagingSenderId: "1041464974653",
    appId: "1:1041464974653:web:72e59a4b57f40ba16df954",
    measurementId: "G-77JPRKZ3MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export const getNotificationToken = () => {
    return getToken(messaging, {
        vapidKey:
            "BKuFcXPaK8DRdOBQocywLn5KHc2epeB330gf66pj8hKoRA-GF8VhSX_6zTjfUIZCcNdd82vopqf2uVLNn-PIDNk",
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
            } else {
                console.error("Token is undefined");
            }
        })
        .catch((err) => {
            alert(err)
            console.error("Token is undefined");
        });
};
