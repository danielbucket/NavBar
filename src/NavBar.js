import { useState, useRef } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import AssignedList from './components/AssignedList';
import useClickOutside from './helpers/useClickOutside';
import './navbar.css';


const usersArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' },
  { id: 6, name: 'Frank' },
  { id: 7, name: 'Grace' },
  { id: 8, name: 'Heidi' },
  { id: 9, name: 'Ivan' },
  { id: 10, name: 'Judy' }
];

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [assignedList, setAssignedList] = useState([]);
  const dropdownContainerRef = useRef(null);

  useClickOutside(dropdownContainerRef, () => {
    setIsDropdownOpen(false);
  });
   
  return (
    <div className="navbar-wrapper fade-element">
      <div className="dropdown-container" ref={dropdownContainerRef}>
        <Dropdown
          optionsArray={usersArray}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          assignedList={assignedList}
          setAssignedList={setAssignedList} />
      </div>
      <main className="main-container">
        <AssignedList
          assignedList={assignedList}
          setAssignedList={setAssignedList} />
      </main>
    </div>
  );
};

export default NavBar;