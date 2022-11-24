import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Copyright} from "@mui/icons-material";
import {Paper} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Input from "../../components/input/Input";
import {v4 as uuidv4} from "uuid";
import ButtonCad from "../../components/button/ButtonCad";
import {
  setNovoUsuario,
  userSelectAll,
  Usuario,
  UsuarioEstado,
} from "../store/sliceUsuario";
import {useDispatch, useSelector} from "react-redux";

interface Mensagem {
  id: string;
  detalhamento: string;
  descricao: string;
}

interface Usuariio {
  id: string;
  name?: string;
  email: string;
  senha?: string;
  mensagens?: Array<Mensagem>;
}
function Signup() {
  const dispatch = useDispatch();
  const usuarioRedux: UsuarioEstado = useSelector(userSelectAll);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [errors, setError] = useState(0);
  const [mensagemErro, setMensagemErro] = useState("");
  const navigate = useNavigate();

  const limpaCampos = () => {
    setName("");
    setEmail("");
    setSenha("");
    setRepetirSenha("");
  };

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSignup = (): Boolean => {
    if (!name || !email || !senha || !repetirSenha) {
      setError(1);
      setMensagemErro("Erro campos Vazios!");
      return false;
    }
    if (senha.length < 5) {
      setError(2);
      setMensagemErro("Senha tem que ter no minimo 5 caracteres ");
      return false;
    }
    if (senha !== repetirSenha) {
      setError(3);
      setMensagemErro("As senhas precisam ser iguais!");
      return false;
    }

    return true;
  };

  const cadastrar = () => {
    if (handleSignup()) {
      let buscarUsuarios = usuarioRedux.listaUsuario.some(
        (usuario: Usuario) => usuario.email === email
      );

      if (buscarUsuarios) {
        alert("E-mail já existe");
        limpaCampos();
        return false;
      }

      const usuarioNovo: Usuariio = {
        id: uuidv4(),
        name: name,
        email: email,
        senha: senha,
      };
      dispatch(setNovoUsuario(usuarioNovo));

      alert("Conta criada...");
      limpaCampos();
      navigate("/");
    }
    return true;
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            marginTop: 20,
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="section" sx={{mt: 3}}>
            <Input
              error={errors === 1 ? true : false}
              value={name}
              label="Digite seu primeiro nome"
              type="text"
              autoComplete="nome"
              helperText={mensagemErro}
              onChange={(e) => {
                setName(e.target.value);
                setError(0);
              }}
            />

            <Input
              error={errors === 1 ? true : false}
              value={email}
              label="Didite seu e-mail"
              type="email"
              autoComplete="email"
              helperText={mensagemErro}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(0);
              }}
            />

            <Input
              error={errors === 1 || errors === 2 ? true : false}
              value={senha}
              label="Digite uma senha"
              type="password"
              autoComplete="senha"
              helperText={mensagemErro}
              onChange={(e) => {
                setSenha(e.target.value);
                setError(0);
              }}
            />

            <Input
              error={errors === 1 || errors === 3 ? true : false}
              value={repetirSenha}
              label="Digite a senha novamente"
              type="password"
              autoComplete="repetirSenha"
              helperText={mensagemErro}
              onChange={(e) => {
                setRepetirSenha(e.target.value);
                setError(0);
              }}
            />
            <ButtonCad onClick={cadastrar} />
            <Link to="/">Entra</Link>
          </Box>
        </Box>
        <Copyright sx={{mt: 5}} />
      </Container>
    </>
  );
}

export default Signup;

export type {Usuariio, Mensagem};
