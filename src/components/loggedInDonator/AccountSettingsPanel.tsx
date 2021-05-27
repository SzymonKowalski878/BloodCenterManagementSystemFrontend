import React from 'react';
import {useHistory} from 'react-router-dom';

export const AccountSettingsPanel:React.FC = ()=>{
    const history = useHistory();

    return (
        <div>
            <div onClick={()=>history.push("/personalDataSettings")}>
                Edytuj dane personalne
            </div>
            <div onClick={()=>history.push("/managePassword")}>
                Edytuj hasło
            </div>
        </div>
    )
}