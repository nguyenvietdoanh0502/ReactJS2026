import RankCard from '../RankCard/RankCard'
import './Table.css'

function Table() {
  const member = [
    {id: 1, rank: 1,name: 'Domenic', points: 88110, team:'dcode'
    },
    {id: 2, rank: 2, name: 'Sally', points: 72400, team: 'Students'
    },
    {id: 3, rank: 3, name: 'Nick', points: 52300, team: 'dcode'
    }
  ]
  return (
    <>
        <div className="table-wrapper">
            <div className="table-header">
                <p>Rank</p>
                <p>Name</p>
                <p>Points</p>
                <p>Team</p>
            </div>
            <ul className="table-list" style={{ listStyle: 'none' }}>
                {member.map((m) => (
                <li key={m.id} className={m.name === 'Sally' ? 'active' : ''}>
                    <RankCard 
                    rank={m.rank} 
                    name={m.name} 
                    points={m.points} 
                    team={m.team} 
                    />
                </li>
                ))}
            </ul>
        </div>
    </>
    )
  
}

export default Table
