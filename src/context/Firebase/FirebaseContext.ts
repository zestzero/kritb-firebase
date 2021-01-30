import React from "react";
import { IFirebaseService } from "services/firebaseService";

const FirebaseContext = React.createContext<IFirebaseService>({});

export default FirebaseContext;
