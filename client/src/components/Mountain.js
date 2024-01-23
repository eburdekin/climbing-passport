export default function Mountain({ mountain }) {
  return (
    <>
      <li key={mountain.id}>
        <span>
          {mountain.name}, {mountain.location}, {mountain.type},{" "}
          {mountain.grade}
        </span>
      </li>
    </>
  );
}
