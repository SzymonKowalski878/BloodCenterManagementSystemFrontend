import React from 'react';

export const UserPanel:React.FC=()=>{
    return(
            <div>
                <div id ="accountSettings" onClick={()=>{window.location.href="/accountSettings"}}>Ustawienia konta</div>
                <div id ="changePassword" onClick={()=>{window.location.href="/accountSettings/changePassword"}}>Zmiana hasła</div>
            </div>
    )
}