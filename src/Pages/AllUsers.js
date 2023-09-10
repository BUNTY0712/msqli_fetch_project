import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the PHP script
    axios
      .get("http://localhost/news-site/backend/getalluser.php")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("user", userData);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            First Name: {user.fname}, Last Name: {user.lname}
          </li>
        ))}
      </ul>
      <button>Add User</button>
    </div>
  );
}

export default UserList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AllUsers = () => {
//   const [userData, setUserData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost/news-site/backend/getalluser.php")

//       .then((response) => setUserData(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//     console.log("user", userData);
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>User List</h1>
//         <ul>
//           {userData.map((user) => (
//             <li>
//               ID: {user.fname}, Updated Balance: {user.lname}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default AllUsers;
