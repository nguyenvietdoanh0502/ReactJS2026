import { useState } from 'react';
import './MemberCard.css';
function Avatar({ name, role }) {
    const [count, setCount] = useState(0);
    return (
        <div className="member-card">
        <h2>{name}</h2>
        <p>Chuc vu: {role}</p>
            <button onClick={()=> setCount(count + 1)}>Binh chon: {count}</button>
        </div>
    );
}
export default Avatar;