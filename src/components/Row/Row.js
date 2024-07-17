import PropTypes from "prop-types";
import './Row.css'
import AddStudent from "../AddStudent/AddStudent"
import React, { useState , useEffect} from 'react';
import axios from 'axios';


const Row = (props) => {

    const { students } = props;

    let selectedStudent;

    const baseURL = "http://127.0.0.1:8000/student/";

    const HandleClick = (props) => {
      const {student} = props;
      selectedStudent = student;
    }
    
    return (
      <div>
        {students.map((student, index) => (
          
            <><tr key={index} class="row" onClick={HandleClick}>
            <td id="name">{student?.name}</td>
            <td id="lastName">{student?.lastName}</td>
            <td id="email">{student?.email}</td>
            <td id="age">{student?.age}</td>
            <td id="grade">{student?.grade}</td>
          </tr><br></br></>
        ))}
        {selectedStudent === null ? <AddStudent/> : <AddStudent student={selectedStudent} />}
      </div>
    );
};

export default Row;