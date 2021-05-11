import React, { useState, useEffect } from "react";

function Update(props) {
    const [grade, setGrade] = useState();
    const [student, setStudent] = useState();
    const [s_id, set_s_id] = useState();

    const [params, setParams] = useState({
        method: "PUT",
        body: {
            id: s_id,
            Grade: grade,
            Student: student,
        }
    });

    useEffect(() => {
            setParams(
                {
                    method: "PUT",
                    body: {
                        id: s_id,
                        Grade: grade,
                        Student: student,
                    }
                }
            )
        }, [grade, student, s_id]);

    function submitHelper(){
        setParams(() => {
            const newParams = {
                method: "PUT",
                body: {
                    id: s_id,
                    Grade: grade,
                    Student: student,
                }
            }
            props.callSecret(newParams)
            return(newParams);
            }
        )
    }


    return (
        <div>
            <label>Student<input type="text" onChange={e => setStudent(e.target.value)}/></label>
            <label>Grade<input type="text" onChange={e => setGrade(e.target.value)}/></label>
            <label>ID<input type="text" onChange={e => set_s_id(e.target.value)}/></label>
            <button onClick={() => submitHelper()}>Update</button>
        </div>
    )
}

export default Update;