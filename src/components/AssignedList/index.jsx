import { FaXmark } from "react-icons/fa6";
import './index.css';

function AssignedList({ assignedList, setAssignedList }) {
  return (
    <div className="assigned-list-container">
      <h2>Assigned Users</h2>
      <div className="list-wrapper">
        {assignedList.length > 0 ? (
          <ul className="assigned-list">
            {assignedList?.map((user, index) => (
              <li key={index} className="assigned-list-item">
                {user.name}
                <button
                  className="remove-button"
                  onClick={() => setAssignedList(prevList => prevList.filter(item => item !== user))}
                  >
                  <FaXmark />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-users">No users assigned.</p>
        )}
      </div>
    </div>
  )
};

export default AssignedList;