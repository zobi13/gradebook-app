import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectGradebooks } from "../store/gradebooks/selectors";
import { getGradebooks } from "../store/gradebooks/slice";

export default function AppGradebooks() {
    const gradebooks = useSelector(selectGradebooks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGradebooks());
      }, []);

    const history = useHistory();

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>Gradebooks</h2>
      {gradebooks &&
        gradebooks.data.map((gradebook) => (
          <div
            key={gradebook.id}
            style={{
              border: "3px solid orange",
              width: 300,
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              <strong>Name:</strong> {gradebook.name}
            </p>
            <Link to={`/gradebooks/${gradebook.id}`}>View gradebook</Link>
            <button onClick={() => history.push(`/gradebooks/${gradebook.id}/edit`)}>
              Edit
            </button>
          </div>
        ))}
    </div>
  );
}
