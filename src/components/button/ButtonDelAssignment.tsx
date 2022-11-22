import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function ButtonDelAssignment() {
  return (
    <Stack spacing={2} direction="row">
      <Button color="error" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Delete
      </Button>
    </Stack>
  );
}

export default ButtonDelAssignment;
