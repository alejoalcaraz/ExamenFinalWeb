import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Home from "./home";


const Homes = () => {
    let url;

    url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

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
    return (
        <><h1><FormattedMessage id="myspaces" /></h1>
            <div id="homes" class="col-12">
                {data.map((e, i) => (
                    console.log(e.name),
                    <Home key={i} ind={e} />
                ))}
            </div>
            <div id="rooms" class= "col-12">
                </div></>


    )
};

export default Homes;