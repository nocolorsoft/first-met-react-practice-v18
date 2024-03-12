import React from "react";

const students = [
    {id:1, name: "Inje"},
    {id:2, name: "Jin"},
    {id:3, name: "Yoon"},
    {id:4, name: "Ji"}
    ];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;