import React, { useState, useEffect } from "react";
import Rooms from "./rooms";
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

function mostrarRooms(props) {
    let id = props.ind.id;

     var rooms = document.getElementById("rooms");
    rooms.innerHTML = ``;
    let carta = `
    <div id = ${id} class ="cuartos">
    ${<Rooms/>}
    </div>
    `;
    rooms.innerHTML += carta;

};



const Home = (props) => {
    return (
        <div class="card" style="width: 18rem;" onClick={() => {mostrarRooms(props)  }}>
            <img class="card-img-top" src="house.jpeg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.ind.name}</h5>
                    <p class="card-text">{props.ind.address}</p>
                
                </div>
        </div>
    );
};



export default Home;



