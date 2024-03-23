import React, { useState } from "react";

const UserInfo = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
  });
  return (
    <div>
      <h1>User Information</h1>
      <div className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, Email: e.target.value })
            }
            name="email"
            id="email"
          />
        </div>
      </div>
      <div className="output">
        <p>Current values in store:</p>
        <p>Name - {formData.Name}</p>
        <p>Email - {formData.Email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
