import "./AddStudent.css";
import React from 'react';
import axios from 'axios';

const AddStudent = (props) => {

  const { student } = props;

  // Handle Add New Student (POST request)
  const handleClickAdd = async () => {
    const newStudent = {
      name: document.getElementById('nameInput').value,
      lastName: document.getElementById('lastNameInput').value,
      email: document.getElementById('emailInput').value,
      age: document.getElementById('ageInput').value,
      grade: document.getElementById('gradeInput').value,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/student/', newStudent);
      console.log('Student added:', response.data);
      window.location.reload(); 
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  // Handle Delete Student (DELETE request)
  const handleClickDelete = async () => {
    if (!student?.id) {
      console.error('No student selected for deletion');
      return;
    }

    try {
      await axios.delete(`http://127.0.0.1:8000/student/${student.id}/`);
      console.log('Student deleted');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Handle Edit Student (PUT request)
  const handleClickEdit = async () => {
    if (!student?.id) {
      console.error('No student selected for editing');
      return;
    }

    const updatedStudent = {
      name: document.getElementById('nameInput').value,
      lastName: document.getElementById('lastNameInput').value,
      email: document.getElementById('emailInput').value,
      age: document.getElementById('ageInput').value,
      grade: document.getElementById('gradeInput').value,
    };

    try {
      const response = await axios.put(`http://127.0.0.1:8000/student/${student.id}/`, updatedStudent);
      console.log('Student updated:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className='addcontainer'>

      <h1 className="title">Selected</h1>

      <div className='form'>
        <div className='labelblock'>
          <label>Name</label>
          <label>Last Name</label>
          <label>Email</label>
          <label>Age</label>
          <label>Grade</label>
        </div>

        <div className='inputblock'>
          <input id="nameInput" type="text" defaultValue={student?.name}></input>
          <input id="lastNameInput" type="text" defaultValue={student?.lastName}></input>
          <input id="emailInput" type="email" defaultValue={student?.email}></input>
          <input id="ageInput" type="number" defaultValue={student?.age}></input>
          <input id="gradeInput" type="number" defaultValue={student?.grade}></input>
        </div>
      </div>

      <br></br>

      <div className="buttoncontainer">
        <button className="deleteBtn" onClick={handleClickDelete}>
          <b>Delete</b>
        </button>
        <button className="addBtn" onClick={handleClickAdd}>
          <b>Add New Student</b>
        </button>
        <button className="editBtn" onClick={handleClickEdit}>
          <b>Edit</b>
        </button>
      </div>

    </div>
  );
};

export default AddStudent;
