// Import necessary dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";

// Todo component with fixed size and rounded borders
const Todo = ({ todo }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card p-3 rounded" style={{ width: "100%", height: "100%" }}>
      <h5 className="card-title">{todo.title}</h5>
      <p className="card-body">{todo.note}</p>
      <button className="btn btn-primary">View</button>
    </div>
  </div>
);
const HomePage = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/user/getAllNotes", {
        headers: {
          "x-auth-token-user":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVmYWNjOGJhOTI4MzMzODg5MjhmOTkiLCJpYXQiOjE3MDA3Njg5OTgsImV4cCI6MTcwODU0NDk5OH0.gAzL0m__lN6GVQjP40oW_FYC9rgFtH_2P33X0gXYVRE",
        },
      })
      .then((resp) => {
        console.log(resp.data.results.note);
        setTodos(resp.data.results.note);
      })
      .catch((err) => console.log(err));
  }, []);
  // const myTodos = async () => {
  //   try {
  //     const todos = await axios.get(
  //       "http://localhost:8001/api/user/getAllNotes",
  //       {
  //         headers: {
  //           "x-auth-token-user":
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVmYWNjOGJhOTI4MzMzODg5MjhmOTkiLCJpYXQiOjE3MDA3Njg5OTgsImV4cCI6MTcwODU0NDk5OH0.gAzL0m__lN6GVQjP40oW_FYC9rgFtH_2P33X0gXYVRE",
  //         },
  //       }
  //     ).data;
  //     console.log(todos);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log(todos);
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Todo List</h1>
      <div className="row">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// // Import necessary dependencies
// import React from "react";

// // Sample todo data
// const todos = [
//   {
//     id: 1,
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni sunt porro voluptatum, saepe unde provident possimus eaque illo laudantium hic cum quibusdam asperiores facilis quis amet et rem fuga.",
//   },
//   {
//     id: 2,
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni sunt porro voluptatum, saepe unde provident possimus eaque illo laudantium hic cum quibusdam asperiores facilis quis amet et rem fuga.",
//   },
//   {
//     id: 3,
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni sunt porro voluptatum, saepe unde provident possimus eaque illo laudantium hic cum quibusdam asperiores facilis quis amet et rem fuga.",
//   },
// ];

// // Todo component with rounded borders
// const Todo = ({ todo }) => (
//   <div className="card m-2 p-3 rounded">
//     <h5 className="card-title">{todo.title}</h5>
//     <button className="btn btn-primary">View</button>
//   </div>
// );

// // Home page component
// const HomePage = () => (
//   <div className="container mt-4">
//     <h1 className="mb-4">Todo List</h1>
//     <div className="row">
//       {todos.map((todo) => (
//         <div key={todo.id} className="col-md-4">
//           <Todo todo={todo} />
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default HomePage;
