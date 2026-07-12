import "./Dashboard.css";

import Card from "../Card/Card";

import {
    FaTasks,
    FaCheckCircle,
    FaClock,
    FaExclamationTriangle
} from "react-icons/fa";

function Dashboard(){

    return(

<section className="dashboard">

<h2>Dashboard</h2>

<div className="cards">

<Card
title="Total Tasks"
value="12"
icon={<FaTasks />}
color="#2563eb"
/>

<Card
title="Completed"
value="7"
icon={<FaCheckCircle />}
color="#16a34a"
/>

<Card
title="Pending"
value="4"
icon={<FaClock />}
color="#f59e0b"
/>

<Card
title="High Priority"
value="1"
icon={<FaExclamationTriangle />}
color="#dc2626"
/>

</div>

</section>

    );

}

export default Dashboard;