import PropTypes from "prop-types";
import './Row.css'
import AddStudent from "../AddStudent/AddStudent"
import React, { useState , useEffect} from 'react';
import axios from 'axios';


const Row = (props) => {

    const { students } = props;

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showAddStudent, setShowAddStudent] = useState(false);

    const handleClick = (student) => {
      setSelectedStudent(student);
      setShowAddStudent(true);
    };
    
    return (
      <div>
        {students.map((student, index) => (
          <table className="row" key={index}>
            <tbody>
              <tr onClick={() => handleClick(student)}>
              <td id="name">{student?.name}</td>
              <td id="lastName">{student?.lastName}</td>
              <td id="email">{student?.email}</td>
              <td id="age">{student?.age}</td>
              <td id="grade">{student?.grade}</td>
              </tr>
            </tbody>
          </table>
        ))}

        {showAddStudent ? <AddStudent student={selectedStudent}/> : <AddStudent/>}

      </div>
    );
};

export default Row;