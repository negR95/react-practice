import "./FormattedDate.css";

function FormattedDate({ date, color }) {

  return <div className="date-background">
    <h1 style={{ backgroundColor: color }}>{date.toTimeString()}</h1>
  </div>

}
export default FormattedDate;