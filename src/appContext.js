import { createContext } from "react";

const Context = createContext({
    firebaseApp: {},
    deviceToken: "",
    setDeviceToken: () => {},
});
export default Context;
