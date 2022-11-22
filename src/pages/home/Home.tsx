import { Copyright } from "@mui/icons-material";
import { Button, CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import InputHome from "../../components/input/InputHome";
import Tabela from "../../components/table/Tabela";
import UserBar from "../../components/usebar/UseBar";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Mensagem, setNovaMensagem } from "../store/sliceMensagens";
import { TrabalhoDeModulo } from "../store/rootReducer";
import { useState } from "react";

function Home() {
  const dispacth = useDispatch();
  const usuariologado = useSelector(
    ({ usuarios }: TrabalhoDeModulo) => usuarios.usuarioOn!
  );
  const [descricao, setDescricao] = useState("");
  const [detalhamento, setDetalhamento] = useState("");

  const salvarMensagens = () => {
    const mensagemNova: Mensagem = {
      id: uuidv4(),
      descricao: descricao,
      detalhamento: detalhamento,
      idUsuario: usuariologado.id,
    };
    setDescricao("");
    setDetalhamento("");
    dispacth(setNovaMensagem(mensagemNova));
  };
  return (
    <>
      <Container component="main" min-width="xs" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            width: 1,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserBar usuario={""} />
          <Box component={Paper} sx={{ width: "100%" }}>
            <Stack direction="row" spacing={1} sx={{ padding: 1 }}>
              <InputHome />
              <InputHome />
              <Button onClick={salvarMensagens} variant="contained">
                Salvar
              </Button>
            </Stack>
          </Box>
          <Tabela />
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}

export default Home;
