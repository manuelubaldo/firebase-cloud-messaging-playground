import { useContext, useEffect, useState } from "react";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import Context from "./appContext";

export default function Notification() {
    const { firebaseApp, deviceToken, setDeviceToken } = useContext(Context);
    const [messagingApp, setMessagingApp] = useState(null);

    useEffect(() => {
        if (firebaseApp) {
            const messaging = getMessaging(firebaseApp);
            setMessagingApp(messaging);
            onMessage(messaging, (payload) => {
                console.log("onMessage", payload);
            });
        }
    }, [firebaseApp]);

    const handleRequestPermission = () => {
        getToken(messagingApp, {
            vapidKey:
                "BF2q8pGMDz6XDcsoIKChAApbOXedJ3h8pPOY5_scMr0yyXj4RswlkuDCkHn_fwGeUw1RxFNAwBpOwKPvLdqu06E",
        }).then((response) => setDeviceToken(response));
    };

    return (
        <div>
            <p>
                <input type="text" defaultValue={deviceToken} />
            </p>
            <p>
                <button type="button" onClick={handleRequestPermission}>
                    Request Permission
                </button>
            </p>
        </div>
    );
}
