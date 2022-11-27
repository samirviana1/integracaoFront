import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {deepOrange, green} from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MensagensRow from "../menssagensRow/MensagensRow";
import {useSelector} from "react-redux";
import {TrabalhoDeModulo} from "../../pages/store/rootReducer";
import {useEffect, useState} from "react";
import {Mensagem} from "../../pages/store/sliceMensagens";
import {userSelectAll} from "../../pages/store/sliceUsuario";
import {Typography} from "@mui/material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Tabela() {
  const {usuarioOn} = useSelector(userSelectAll);
  const listaMensagem = useSelector(
    (state: TrabalhoDeModulo) => state.mensagens.listaMensagem
  );
  const [row, setRow] = useState<Mensagem[]>([]);
  useEffect(() => {
    if (listaMensagem.length) {
      const minhaMensagens = listaMensagem.filter(
        (i) => i.idUsuario === usuarioOn?.id
      );
      setRow(minhaMensagens);
    }
  }, [listaMensagem]);
  return (
    <>
      {row.length ? (
        <TableContainer component={Paper}>
          <Table
            sx={{minWidth: 700, overflow: "auto"}}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Detalhes</StyledTableCell>
                <StyledTableCell align="center">Descrição</StyledTableCell>
                <StyledTableCell align="center">Ações</StyledTableCell>
              </TableRow>
            </TableHead>

            {row.length && (
              <TableBody>
                {row.map((mensagens, index) => {
                  console.log(mensagens.id);

                  return (
                    <MensagensRow
                      detalhamento={mensagens.detalhamento}
                      descricao={mensagens.descricao}
                      id={index + 1}
                      chave={mensagens.id}
                      key={mensagens.id}
                    ></MensagensRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      ) : (
        <>
          <Typography>Crie sua primeira mensagem!</Typography>
        </>
      )}
    </>
  );
}
