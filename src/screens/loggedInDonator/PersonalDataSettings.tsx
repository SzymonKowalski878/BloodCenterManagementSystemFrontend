import React from 'react';

import {ReturnDonatorInformation} from '../../components/returnDonatorInformation';
import {AccountSettingsPanel} from '../../components/loggedInDonator/AccountSettingsPanel';
export const PersonalDataSettings:React.FC = ()=>{

    return (
        <div>
            <div>
                <AccountSettingsPanel/>
            </div>
            <div>
                <ReturnDonatorInformation/>
            </div>
        </div> 
    )
}