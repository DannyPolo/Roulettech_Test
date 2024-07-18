import PropTypes from "prop-types";
import "./Header.css";
import student from "../../pages/Home";
import AddStudent from "../AddStudent/AddStudent";

const Header = (props) => {
  const { title } = props;
  return (
    <div className="Header">
      <>
        <b className="title">{title}</b>
      </>

      <hr></hr>

      <table className="tableHeader">
        <thead>
          <tr>
            <th id="name">Name</th>
            <th id="lastName">Last Name</th>
            <th id="email">Email</th>
            <th id="age">Age</th>
            <th id="grade">Grade</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;
