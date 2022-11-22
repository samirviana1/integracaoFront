import { Button, Stack } from "@mui/material";

function ButtonEditAssignment() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        fullWidth
        variant="contained"
        color="success"
        sx={{ mt: 3, mb: 2 }}
      >
        Editar
      </Button>
    </Stack>
  );
}

export default ButtonEditAssignment;
