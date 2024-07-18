import Table from "../components/Table/Table";
import React, { useState , useEffect} from 'react';
import axios from 'axios';

//const Home = (props) => {
//  return <Table title={"Manage Students"} students={students} />;
//};


const Home = (props) => {

  //const baseURL = "http://127.0.0.1:8000/student/";
  const baseURL = "http://3.145.131.202:8000/student/";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL, {timeout: 10000}).then((res) => setData(res.data))
  }, []);

  return <Table title={"Manage Students"} students={data} />;
};

export default Home;
