import React from "react";


export default function HolidayCalendar() {
  const holidays = [
    { date: "01 January", day: "Thursday", name: "New Year" },
    { date: "14 January", day: "Wednesday", name: "Bhogi" },
    { date: "15 January", day: "Thursday", name: "Sankranthi" },
    { date: "26 January", day: "Monday", name: "Republic Day" },
    { date: "19 March", day: "Thursday", name: "UGADI (Telugu New Year)" },
    { date: "27 March", day: "Friday", name: "Sri Rama Navami" },
    { date: "14 September", day: "Monday", name: "Ganesh Chaturthi" },
    { date: "02 October", day: "Friday", name: "Gandhi Jayanthi" },
    { date: "20 October", day: "Tuesday", name: "Vijaya Dashami" },
    { date: "25 December", day: "Friday", name: "Christmas" },
  ];

  return (
    <div className="main-card">
      <h3 className="section-heading" style={{ marginBottom: 16 ,color:"#f56c00",textAlign:"center"}}>Holiday Calendar – 2026</h3>

      <table className="holiday-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((h, i) => (
            <tr key={i}>
              <td>{h.date}</td>
              <td>{h.day}</td>
              <td>{h.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`

       .section-heading{
       font-weight :600
       }
        .holiday-table {
          width: 100%;
          border-collapse: collapse;
        }
        th {
          text-align: left;
          font-weight: 600;
          padding: 10px;
          border-bottom: 1px solid #e5e7eb;
          border-top: 1px solid #e5e7eb;
          border-right: 1px solid #e5e7eb;
          border-left: 1px solid #e5e7eb;
        }
        td {
          padding: 10px;
          border-bottom: 1px solid #f1f5f9;
          border-right: 1px solid #e5e7eb;
            border-left: 1px solid #e5e7eb;

          font-size: 14px;

        }
      `}</style>
    </div>
  );
}
