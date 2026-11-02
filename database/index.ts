import { startServer, store } from "./connection";

export const mongoDBConnection = async () => {
    return {
        startServer,
        store
    }
};

