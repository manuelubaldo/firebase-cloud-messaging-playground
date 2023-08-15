import { useEffect, useState } from "react";
import Notification from "./notification";
import Context from "./appContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApCrsgqHCuUSG2-1_9VQfRFYFlf3j1DLs",
    authDomain: "testproject-be545.firebaseapp.com",
    projectId: "testproject-be545",
    storageBucket: "testproject-be545.appspot.com",
    messagingSenderId: "834561813650",
    appId: "1:834561813650:web:c841d9f8e33f91aab6ca4b",
    measurementId: "G-H2VED1KDE7",
};

export default function App() {
    useEffect(() => {}, []);
    const [firebaseApp, setFirebaseApp] = useState(null);
    const [deviceToken, setDeviceToken] = useState("");

    const init = () => {
        var app = initializeApp(firebaseConfig);
        setFirebaseApp(app);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Context.Provider value={{ firebaseApp, deviceToken, setDeviceToken }}>
            <Notification />
        </Context.Provider>
    );
}
