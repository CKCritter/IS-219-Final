import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Grades from './Grades.js'
import Update from './Update.js'

function Secret() {
    const [message, setMessage] = useState("");
    const [grades, setGrades] = useState([]);
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { getAccessTokenSilently } = useAuth0();

    async function callSecret(params) {
        try {
            const token = await getAccessTokenSilently ({
                audience: `http://localhost:9080/`,
            });


            let url = `${serverUrl}/api/secrets/`
            if(params.hasOwnProperty('body') && params.body.hasOwnProperty('id')){
                url = `${serverUrl}/api/secrets/${params.body.id}`
            }



            params.headers = { Authorization: `Bearer ${token}` }
            const response = await fetch(
                url, params
            );

            const responseData = await response.json();

            if(!params.hasOwnProperty("method")){
                setGrades(responseData.data)
            }

            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <Update callSecret={callSecret}/>
            <button onClick={() => callSecret({})}>Secret</button>
            {message}
            <Grades grades={grades}/>
        </div>
    )
}

export default Secret;