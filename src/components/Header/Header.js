import PropTypes from "prop-types";
import "./Header.css";
import student from "../../pages/Home";
import AddStudent from "../AddStudent/AddStudent";

const Header = (props) => {
  const { title } = props;
  return (
    <div class="Header">
      <div>
        <b class="title">{title}</b>
        <button class="deleteBtn">
          <b>Delete</b>
        </button>
        <button class="addBtn">
          <b>Add New Student</b>
        </button>
        <button class="editBtn">
          <b>Edit</b>
        </button>
      </div>

      <hr></hr>

      <table class="tableHeader">
        <th id="name">Name</th>
        <th id="lastName">Last Name</th>
        <th id="email">Email</th>
        <th id="age">Age</th>
        <th id="grade">Grade</th>
      </table>
    </div>
  );
};

export default Header;
