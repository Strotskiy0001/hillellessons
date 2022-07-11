export default function Button({ children, cb }) {
  return (
    <div>
      <button onClick={cb}>{children}</button>
    </div>
  );
}
