import "./PriorityBadge.css";

function PriorityBadge({ priority }) {
  const getClass = () => {
    switch (priority) {
      case "High":
        return "high";

      case "Medium":
        return "medium";

      default:
        return "low";
    }
  };

  return (
    <span className={`priority ${getClass()}`}>
      {priority}
    </span>
  );
}

export default PriorityBadge;