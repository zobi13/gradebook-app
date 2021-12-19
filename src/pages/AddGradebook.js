import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createGradebook } from "../store/gradebooks";

export default function AddGradebook() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [gradebookData, setGradebookData] = useState({
    name: '',
    user_id: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      createGradebook({
        gradebook: gradebookData,
        onSuccess: (gradebook) => {
          history.push(`gradebooks/${gradebook.id}`);
        },
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            required
            placeholder="Name"
            value={gradebookData.name}
            onChange={({ target }) =>
              setGradebookData({ ...gradebookData, name: target.value })
            }
          />
        </div>
        <div>
          <input
            required
            placeholder="Teacher"
            value={gradebookData.user_id}
            onChange={({ target }) =>
            setGradebookData({ ...gradebookData, user_id: target.value })
            }
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
