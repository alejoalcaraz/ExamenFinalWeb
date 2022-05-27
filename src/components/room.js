import React, { useState, useEffect } from "react";
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';


function mostrarDetalle(props)
{

}
const Room = (props) => {
    if(props.idh === props.ind.homeId)
    {
    return (<></>);
    }
    else{
    return (
        <div class="card" style="width: 18rem;" onClick={() => {mostrarDetalle(props)  }}>
            <img class="card-img-top" src="house.jpeg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.ind.name}</h5>             
                </div>
        </div>
    );
    }
};



export default Room;