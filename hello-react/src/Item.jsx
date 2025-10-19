export default function Item({ item, del, toggle }) {
  return <li>
    <button onClick={ () => toggle(item.id)}>
        {item.done ? "Undo" : "Check"}
    </button>
    {item.name}
    <button onClick={() => del(item.id)}>Del</button>
    </li>;
}