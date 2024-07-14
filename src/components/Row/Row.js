import PropTypes from "prop-types";
import './Row.css'

const Row = (props) => {
    const { students } = props;
    return (
      <div class="row">
        {students.map((student, index) => (
          <table>
            <div key={index}>
              <tr id="">
                <td>
                  <input id="select" type="checkbox"></input>
                </td>
                <td id="name">{student.name}</td>
                <td id="lastName">{student.lastName}</td>
                <td id="email">{student.email}</td>
                <td id="age">{student.age}</td>
                <td id="grade">{student.grade}</td>
              </tr>
              <br></br>
            </div>
          </table>
        ))}
      </div>
    );
};

export default Row;