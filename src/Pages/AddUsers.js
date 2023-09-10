import React from "react";

const AddUsers = () => {
  return (
    <>
      <div>
        <form
          action="http://localhost/news-site/backend/UserData.php"
          method="POST"
          //   autoComplete="off"
        >
          <div>
            <label>First Name</label>
            <input type="text" name="fname" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lname" />
          </div>
          <div>
            <label>User Name</label>
            <input type="text" name="user" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="password" />
          </div>
          <div>
            <label>User Role </label>
            <select name="role">
              <option value="0">Normal User </option>
              <option value="1">Admin </option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddUsers;
