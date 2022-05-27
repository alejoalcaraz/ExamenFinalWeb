import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Room from "./room";


const Rooms = () => {
    let url;

    url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();


    }, []);
    console.log(data);
    var idhome = document.getElementsByClassName("cuartos").id;
    return (
        <><h1><FormattedMessage id="myrooms" /></h1>
            <div id="mirooms" class="col-12">
                {data.map((e, i) => (
              <Room key={i} ind={e} idh = {idhome}/>
               ))}
            </div></>
            


    )
};

export default Rooms;