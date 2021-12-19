import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/activeUser/slice";

export default function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    profile_pic_url: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          minLength={2}
          value={userData.first_name}
          placeholder="First name"
          onChange={({ target }) =>
            setUserData({ ...userData, first_name: target.value })
          }
        />
        <input
          required
          minLength={2}
          value={userData.last_name}
          placeholder="Last name"
          onChange={({ target }) =>
            setUserData({ ...userData, last_name: target.value })
          }
        />
        <input
          required
          value={userData.email}
          placeholder="Email"
          onChange={({ target }) =>
            setUserData({ ...userData, email: target.value })
          }
        />
        <input
          required
          type="password"
          minLength={6}
          value={userData.password}
          placeholder="Password"
          onChange={({ target }) =>
            setUserData({ ...userData, password: target.value })
          }
        />
        <input
          required
          type="password"
          minLength={6}
          value={userData.password_confirmation}
          placeholder="Confirm Password"
          onChange={({ target }) =>
            setUserData({ ...userData, password_confirmation: target.value })
          }
        />
        <input
          required
          minLength={2}
          value={userData.profile_pic_url}
          placeholder="Profile picture(url)"
          onChange={({ target }) =>
            setUserData({ ...userData, profile_pic_url: target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
