import { FaXmark } from "react-icons/fa6";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import './Dropdown.css';

function DropdownButton({
    optionsArray,
    isDropdownOpen,
    setIsDropdownOpen,
    assignedList,
    setAssignedList
  }) {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAssign = option => {
    setAssignedList(prevList => {
      if(prevList.includes(option)) {
        const updatedList = prevList.filter(item => item !== option)
        return updatedList;
      } else {
        return [...prevList, option]
      }
    })
  };
  
  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">
        <button className="dropdown-button"
          onClick={toggleDropdown}
        >
          <span >
            <FiChevronDown className="icon" />
            <span className="text">Select a user</span>
          </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div
                  className="close-button"
                  onClick={e => {
                    e.stopPropagation();
                    setIsDropdownOpen(false);
                  }}
                >
                  <span>Close</span>
                  <span>
                    <FaXmark size={20} />
                  </span>
                </div>
                <ul className="dropdown-list">
                  {optionsArray.map((user) => (
                    <li key={user.id}
                      className="list-item"
                      onClick={() => handleAssign(user)}
                    >
                      {assignedList.includes(user) && <FiCheck />}
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </button>
      </label>
    </div>
  );
}

export default DropdownButton;
