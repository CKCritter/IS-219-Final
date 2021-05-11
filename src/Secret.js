import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Secret() {
    const [message, setMessage] = useState("");
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

            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <button onClick={() => callSecret()}>Secret</button>
            {message}
        </div>
    )
}

export default Secret;