export default function AppInput({ value, placeholder, onChange, name }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}
