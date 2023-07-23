import React from "react"

const students = [
    {
        id: 1,
        name: "inje"
    },

    {
        id: 2,
        name: "Steve"
    },

    {
        id: 3,
        name: "Bill"
    },

    {
        id: 4,
        name: "Jeff"
    },

];

function AttendanceBook(props){
    return(
        // key값으로 id를 사용해줌!!!
        <ul>
            
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;