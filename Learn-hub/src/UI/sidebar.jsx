import { useState } from "react";
import "./sidebar.css"; // We'll add some simple styling

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "📐", label: "Mathematics" },
    { icon: "🔬", label: "Science" },
    { icon: "📜", label: "History" },
    { icon: "🗣️", label: "Languages" },
    { icon: "💻", label: "Computer Science" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⬅️" : "➡️"}
      </button>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}