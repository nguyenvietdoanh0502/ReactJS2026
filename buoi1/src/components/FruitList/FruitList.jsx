const fruits = ['Táo', 'Chuối', 'Cam'];

export default function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}