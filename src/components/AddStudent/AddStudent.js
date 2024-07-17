import "./AddStudent.css";


const AddStudent = (props) => {

  const { student } = props;
  
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
          <input id="nameInput" type="text">{student?.name}</input>
          <input id="lastNameInput" type="text" >{student?.lastName}</input>
          <input id="emailInput" type="email">{student?.email}</input>
          <input id="ageInput" type="number">{student?.age}</input>
          <input id="gradeInput" type="number">{student?.grade}</input>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
