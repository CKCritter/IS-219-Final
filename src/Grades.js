import React from "react";

function Grades(props){
    const grades = props.grades;

    return(
      <div>
          <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Student</th>
                  <th>Grade</th>
              </tr>
              </thead>
              {grades.map((s) => (
                  <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.Student}</td>
                      <td>{s.Grade}</td>
                  </tr>
              ))}
          </table>
      </div>
    );
}

export default Grades