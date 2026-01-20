"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useKeycloak } from "@react-keycloak/web";

export default function Header() {
  const { keycloak, initialized } = useKeycloak();

  // if (!initialized) return null;

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="header-left">
          <Image
            src="/logo.png"
            alt="Adroitent logo"
            height={44}
            width={44}
            priority
          />
        </div>

        {/* RIGHT */}

        <div className="header-right">
          <FontAwesomeIcon icon={faBell} />

          <FontAwesomeIcon icon={faCircleUser} style={{ color: "#000" }} />

          <span className="user-name">
            {keycloak.tokenParsed?.preferred_username}
          </span>

          <button
            className="logout-btn"
            onClick={() => {
              keycloak.logout();
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <style jsx>{`
        .header {
          min-height: 72px; /* ✅ prevents clipping */
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 50; /* ✅ stays on top */
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .user-name {
          font-size: 14px;
          font-weight: 500;
        }

        .logout-btn {
          background: #f56c00;
          border: none;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          color: #ffffff;
        }

        .logout-btn:hover {
          background: #d85e00;
        }
      `}</style>
    </>
  );
}
