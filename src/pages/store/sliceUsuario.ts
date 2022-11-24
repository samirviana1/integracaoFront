import { Slide } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrabalhoDeModulo } from "./rootReducer";

export interface Usuario {
  id: string;
  name: string;
  email: string;
  senha: string;
}

export interface UsuarioLogado {
  id: string;
  email: string;
  name: string;
}

export interface UsuarioEstado {
  loading: boolean;
  mensagem: {
    tipo: string;
    estado: number;
    texto: string;
  };
  listaUsuario: Array<Usuario>;
  usuarioOn: UsuarioLogado | null;
}

const initialState: UsuarioEstado = {
  loading: false,
  mensagem: {
    tipo: "",
    estado: 200,
    texto: "",
  },
  listaUsuario: [],
  usuarioOn: null,
};

export const userSelectAll = (state: TrabalhoDeModulo) => state.usuarios;

const usuarioSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    setNovoUsuario: (state, action) => {
      state.listaUsuario = [...state.listaUsuario, action.payload];
    },
    setUsuarioOn: (state, action) => {
      state.usuarioOn = action.payload;
    },
    setUsuarioOff: (state) => {
      state.usuarioOn = null;
    },
  },
  extraReducers: {},
});

export const { setNovoUsuario, setUsuarioOn, setUsuarioOff } =
  usuarioSlice.actions;
export default usuarioSlice.reducer;
