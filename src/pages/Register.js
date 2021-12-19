import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/auth";

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

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register(userData));
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            placeholder="First name"
            value={userData.first_name}
            onChange={({ target }) =>
              setUserData({ ...userData, first_name: target.value })
            }
          />
        <input
            required
            placeholder="Last name"
            value={userData.last_name}
            onChange={({ target }) =>
              setUserData({ ...userData, last_name: target.value })
            }
          />
        <input
            required
            placeholder="Profile picture(url)"
            value={userData.profile_pic_url}
            onChange={({ target }) =>
              setUserData({ ...userData, profile_pic_url: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={({ target }) =>
              setUserData({ ...userData, email: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={({ target }) =>
              setUserData({ ...userData, password: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            type="password"
            placeholder="Confirm password"
            value={userData.password_confirmation}
            onChange={({ target }) =>
              setUserData({ ...userData, password_confirmation: target.value })
            }
          />
        </div>

        <button>Register</button>
      </form>
    </div>
  );
}
