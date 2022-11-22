import { TextField } from "@mui/material";
interface InputProps {
  value: string;
  label: string;
  type?: string;
  autoComplete: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function InputHome({
  value,
  label,
  type,
  autoComplete,
  onChange,
}: Partial<InputProps>) {
  return (
    <>
      <TextField
        required
        fullWidth
        value={value}
        label={label}
        type={type}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </>
  );
}

export default InputHome;
