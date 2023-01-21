import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TrabalhoDeModulo} from "./rootReducer";
import instace from "../service/api";

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

export const postCadastro = createAsyncThunk(
  "cadastro/post",
  async (body: object) => {
    const response = await instace.doPost(body);
    return response?.data;
  }
);

export const postLogin = createAsyncThunk(
  "login/post",
  async (body: object) => {
    const response = await instace.doPost(body);
    if (response?.status !== 200) {
      return null;
    }
    return response?.data;
  }
);

export const getAllUser = createAsyncThunk(
  "getAllUser/get",
  async (_, {dispatch}) => {
    const response = await instace.doGet("/users");
    if (response?.status !== 200) {
      dispatch(setListaUsuario([]));
      return null;
    }
    dispatch(setListaUsuario(response.data.dados));
    return null;
  }
);

export const userSelectAll = (state: TrabalhoDeModulo) => state.usuarios;

const usuarioSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    setListaUsuario: (state, action) => {
      state.listaUsuario = action.payload;
    },
    setUsuarioOn: (state, action) => {
      state.usuarioOn = action.payload;
    },
    setUsuarioOff: (state) => {
      state.usuarioOn = null;
    },
  },
  extraReducers: {
    // @ts-ignore
    [postCadastro.fulfilled]: (state, action) => {
      state.mensagem = action.payload;
    },
    // @ts-ignore
    [postLogin.fulfilled]: (state, action) => {
      state.usuarioOn = action.payload;
    },
  },
});

export const {setListaUsuario, setUsuarioOn, setUsuarioOff} =
  usuarioSlice.actions;
export default usuarioSlice.reducer;
