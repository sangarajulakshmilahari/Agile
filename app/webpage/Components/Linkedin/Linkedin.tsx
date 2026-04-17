"use client";

export default function LinkedinStrip() {
  return (
    <>
      <div className="linkedin-strip">
        <img
          src="/linkedin.png"
          alt="LinkedIn"
          className="linkedin-icon"
        />

        <span>
          <strong>Adroitent</strong> is a leading technology partner delivering
          AI-driven enterprise solutions
          <span className="separator"> | </span>
          Known for supportive culture & solid work-life balance
          <span className="separator"> | </span>
          Certified AI & IT partner
          <span className="cta"> → Follow us on LinkedIn</span>
        </span>
      </div>

      <style jsx>{`
        .linkedin-strip {
          .linkedin-strip {
            grid-column: 2 / 4; 
            grid-row: 1; 
          }

          display: flex;
          align-items: center;
          gap: 12px;
          background: #f5f7fb;
          border-radius: 12px;
          padding: 10px 16px;
          margin-bottom: 20px;
          font-size: 14px;
          color: #333;
        }

        .linkedin-icon {
          width: 18px;
          height: 18px;
        }

        .separator {
          margin: 0 6px;
          color: #999;
        }

        .cta {
          margin-left: 8px;
          color: #0a66c2;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}



