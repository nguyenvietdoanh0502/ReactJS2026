import useFetch from "../hooks/useFetch";

export default function UserList() {
  // Code UI bÃ¢y giá» sáº¡ch bong, khÃ´ng cÃ²n dáº¥u váº¿t cá»§a fetch()
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_BASE_URL}/users`,
  );

  if (loading) return <p>Äang táº£i...</p>;
  if (error) return <p>Lá»—i: {error}</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

