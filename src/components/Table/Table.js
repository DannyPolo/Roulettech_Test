import PropTypes from "prop-types";
import Header from "../Header/Header";
import Row from "../Row/Row";
import AddStudent from "../AddStudent/AddStudent"

const Table = (props) => {
  const { title, students } = props;

  return (
    <div>
      <Header title="Manage Student" />
      <Row students={students} />
    </div>
  );
};

export default Table;

Table.prototype = {
  title: PropTypes.number,
};
