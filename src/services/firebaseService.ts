import firebase from "firebase/app";
import "firebase/database";

export interface IFirebaseService {
    database?: firebase.database.Database;
}

class FirebaseService implements IFirebaseService {
    public readonly database: firebase.database.Database;
    private config = {
        apiKey: process.env.REACT_APP_API_KEY,
        appId: process.env.REACT_APP_APP_ID,
        projectId: process.env.REACT_APP_PROJECT_ID,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };

    public constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(this.config);
        }
        this.database = firebase.database();
    }
}

export default FirebaseService;
