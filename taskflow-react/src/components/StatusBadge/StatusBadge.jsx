import "./StatusBadge.css";

function StatusBadge({ status }) {
  const getClass = () => {
    switch (status) {
      case "Completed":
        return "completed";

      case "In Progress":
        return "progress";

      default:
        return "todo";
    }
  };

  return (
    <span className={`status ${getClass()}`}>
      {status}
    </span>
  );
}

export default StatusBadge;