import OneSignal from "react-onesignal";

export function initializeOneSignal() {
    OneSignal.init(
        {appId: "af7eed89-0e37-49ac-a34f-a42ced108740", allowLocalhostAsSecureOrigin: true})
        .then(() => {
            alert("One Signal Initialized")
            OneSignal.showSlidedownPrompt().then(() => {
                alert("showSlidedownPrompt")
            });
        })
}
