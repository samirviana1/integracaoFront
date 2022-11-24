import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {
  MensagemEstado,
  mensagensSelectAll,
  setNovaListaDeMensagens,
} from "../../pages/store/sliceMensagens";

function ButtonDelAssignment(msgId: any) {
  const dispatch = useDispatch();

  const mensagensEstado: MensagemEstado = useSelector(mensagensSelectAll);

  function deletarMensagem(idMsg: any) {
    //apagar mensagem do redux persist
    const stringMsg = idMsg.msgId;

    console.log("Old List >>", mensagensEstado.listaMensagem);

    const mensagemAlvoIndex = mensagensEstado.listaMensagem.findIndex(
      (m) => m.id === stringMsg
    );
    console.log("MensagenmAlvoIndex >>", mensagemAlvoIndex);

    const newList = mensagensEstado.listaMensagem.splice(mensagemAlvoIndex, 1);

    console.log("newList >>", newList);

    // dispatch(setNovaListaDeMensagens(newList));
  }

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => deletarMensagem(msgId)}
        color="error"
        fullWidth
        variant="contained"
        sx={{mt: 3, mb: 2}}
      >
        Delete
      </Button>
    </Stack>
  );
}

export default ButtonDelAssignment;
