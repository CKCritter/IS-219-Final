import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Grades from './Grades.js'

function Secret() {
    const [message, setMessage] = useState("");
    const [grades, setGrades] = useState([]);
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { getAccessTokenSilently } = useAuth0();

    async function callSecret() {
        try {
            const token = await getAccessTokenSilently ({
                audience: `http://localhost:9080/`,
            });
            console.log(token)
            const response = await fetch(
                `${serverUrl}/api/secrets/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const responseData = await response.json();
            setGrades(responseData.data);
            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <button onClick={() => callSecret()}>Secret</button>
            {message}
            <Grades grades={grades}/>
        </div>
    )
}

export default Secret;