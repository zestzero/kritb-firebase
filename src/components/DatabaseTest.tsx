import { IFirebaseProps, withFirebase } from 'hoc/withFirebase';
import * as React from 'react';

type Props = {} & IFirebaseProps;

const DatabaseTest: React.FC<Props> = (props) => {
    const [data, setData] = React.useState<string | undefined>();
    React.useEffect(() => {
        const getData = async () => {
            const result = props.database && await props.database.ref('test/0/title').get();
            setData(result?.val());
        }

        if (props.database) {
            getData();
        }
    }, [props.database]);
    return (<div>Data receive from firebase: {data}</div>);
};

export default withFirebase(DatabaseTest);
