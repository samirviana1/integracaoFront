import { TrabalhoDeModulo } from "./rootReducer";
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export interface Mensagem {
  id: string;
  descricao: string;
  detalhamento: string;
  idUsuario: string;
}

export interface MensagemEstado {
  loading: boolean;
  mensagem: {
    tipo: string;
    estado: number;
    texto: string;
  };
  listaMensagem: Array<Mensagem>;
}

const initialState: MensagemEstado = {
  loading: false,
  mensagem: {
    tipo: "",
    estado: 200,
    texto: "",
  },
  listaMensagem: [],
};

export const mensagensSelectAll = (state: TrabalhoDeModulo) => state.mensagens;

const mensagensSlice = createSlice({
  name: "mensagens",
  initialState,
  reducers: {
    setNovaMensagem: (state, action) => {
      state.listaMensagem = [...state.listaMensagem, action.payload];
    },
  },
  extraReducers: {},
});

export const { setNovaMensagem } = mensagensSlice.actions;
export default mensagensSlice.reducer;
