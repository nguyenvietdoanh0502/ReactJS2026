import { useState } from 'react';
import './RankCard.css';
function RankCard({ rank,name,points,team }) {
    return (
        <div className="rank-card">
            <p>{rank}</p>
            <p>{name}</p>
            <p>{points}</p>
            <p>{team}</p>
        </div>
    );
}
export default RankCard;