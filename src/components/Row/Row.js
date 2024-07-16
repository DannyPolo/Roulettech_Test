import PropTypes from "prop-types";
import './Row.css'
import AddStudent from "../AddStudent/AddStudent"

let selectedRow = -1;

const Row = (props) => {
    const { students } = props;
    
    return (
      <div>
        {students.map((student, index) => (
          <div key={index}>
            <tr class="row" onClick={selectedRow = student.id}>
              <td id="name">{student.name}</td>
              <td id="lastName">{student.lastName}</td>
              <td id="email">{student.email}</td>
              <td id="age">{student.age}</td>
              <td id="grade">{student.grade}</td>
            </tr>
            <br></br>
          </div>
        ))}
      </div>
    );
};

export default Row;