import FirebaseContext from "context/Firebase/FirebaseContext";
import React from "react";
import { IFirebaseService } from "services/firebaseService";
import { isEmpty } from "utils/isEmpty";

export type IFirebaseProps = IFirebaseService;
export const withFirebase = <T extends {}>(Component: React.FunctionComponent<T>) => (
    props: T
) => (
    <FirebaseContext.Consumer>
        {(firebase: IFirebaseService) => {
            validateFirebaseService(firebase);
            return <Component {...props} database={firebase.database} />;
        }}
    </FirebaseContext.Consumer>
);

const validateFirebaseService = (firebase: IFirebaseService) => {
    if (isEmpty(firebase)) {
        throw Error("Firebase is not initialized!");
    } else if (!firebase.database) {
        throw Error("Firebase.Database is not initialized!");
    }
};

export default FirebaseContext;
