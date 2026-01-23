"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendar,
  faGraduationCap,
  faNewspaper,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  activeView: "home" | "holiday";
  onChange: (view: "home" | "holiday") => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  activeView,
  onChange,
  open,
  setOpen,
}: SidebarProps) {
  // const [open, setOpen] = useState(true);
  return (
    <>
      <aside className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="toggle" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faChevronLeft : faChevronRight} />
        </div>
        <ul>
          <li
            className={activeView === "home" ? "active" : ""}
            onClick={() => onChange("home")}
          >
            <FontAwesomeIcon icon={faHouse} style={{ color: "#808080" }} />
            {open && <span>Home</span>}
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faCalendar} style={{ color: "#808080" }} />
            {open && <span>Events</span>}
          </li>
          <li
            className={activeView === "holiday" ? "active" : ""}
            onClick={() => onChange("holiday")}
          >
            <FontAwesomeIcon icon={faCalendar} style={{ color: "#808080" }} />
            {open && <span>Holiday Calendar</span>}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#808080" }}
            />
            {open && <span>Learning & Development</span>}
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} style={{ color: "#808080" }} />{" "}
            {open && <span>Featured Articles</span>}
          </li>
        </ul>
      </aside>

      <style jsx>{`
        .sidebar {
          height: 100%;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          transition: width 0.25s ease;
          overflow: hidden;
          position: relative;
        }

        .sidebar.open {
          padding: 16px;
        }

        .sidebar.closed {
          padding: 12px 6px;
        }

        .toggle {
          position: absolute;
          top: 50%;
          right: 0px;
          transform: translateY(-50% 50%);
          background: #ffffff;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 12px;
          cursor: pointer;
          justify-content: flex-start;
        }
        li span {
          color: #000000; /* force black for sidebar labels */
          font-weight: 500;
        }

        .sidebar.closed li {
          justify-content: center;
        }

        li:hover {
          background: #f5f5f5;
        }

        li.active span {
          color: #f56c00;
          font-weight: 600;
        }

        li.active {
          background: #fff3e0;
        }

        span {
          white-space: normal;
        }
      `}</style>
    </>
  );
}
