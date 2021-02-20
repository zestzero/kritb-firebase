import firebase from "firebase/app";
import "firebase/database";

export interface IFirebaseService {
    database?: firebase.database.Database;
}

class FirebaseService implements IFirebaseService {
    public readonly database: firebase.database.Database;
    private config = {
        apiKey: process.env.FB_API_KEY,
        appId: process.env.FB_APP_ID,
        projectId: process.env.FB_PROJECT_ID,
        authDomain: process.env.FB_AUTH_DOMAIN,
        databaseURL: process.env.FB_DATABASE_URL,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        measurementId: process.env.FB_MEASUREMENT_ID,
    };

    public constructor() {
        if (!firebase.apps.length) {
            if (!this.config.apiKey) {
                console.error("You need to provide api key from environment variable");
            }
            firebase.initializeApp(this.config);
        }
        this.database = firebase.database();
    }
}

export default FirebaseService;
