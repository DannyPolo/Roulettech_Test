import Table from "../components/Table/Table";

const students = [
  {
    name: "Daniel",
    lastName: "Polo",
    email: "dpolo@gmail.com",
    age: "25",
    grade: "6",
  },
  {
    name: "Camila",
    lastName: "Sardiñas",
    email: "csardiñas@gmail.com",
    age: "24",
    grade: "5",
  },
  {
    name: "David",
    lastName: "Machin",
    email: "dmachin@gmail.com",
    age: "15",
    grade: "1",
  },
];

const Home = (props) => {
  return <Table title={"Manage Students"} students={students} />;
};

export default Home;
