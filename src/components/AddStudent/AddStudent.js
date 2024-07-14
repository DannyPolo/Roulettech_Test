import "./AddStudent.css";

const AddStudent = (props) => {
  const { students } = props;
  return (
    <div class='addcontainer'>
      <h1 class="title">Form</h1>
      <div class='form'>
        <div class='labelblock'>
          <label>Name</label>
          <label>Last Name</label>
          <label>Email</label>
          <label>Age</label>
          <label>Grade</label>
        </div>
        <div class='inputblock'>
          <input type="text"></input>
          <input type="text" ></input>
          <input type="email"></input>
          <input type="number"></input>
          <input type="number"></input>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
