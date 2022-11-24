import { TextField } from "@mui/material";
interface InputProps {
  error?: boolean;
  value: string;
  label: string;
  type?: string;
  autoComplete: string;
  helperText: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  error,
  value,
  label,
  type,
  autoComplete,
  helperText,
  onChange,
}: Partial<InputProps>) {
  return (
    <>
      <TextField
        margin="normal"
        error={error}
        required
        fullWidth
        value={value}
        label={label}
        type={type}
        helperText={helperText}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </>
  );
}

export default Input;
