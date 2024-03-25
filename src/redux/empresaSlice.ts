
import { createSlice } from '@reduxjs/toolkit';

const empresaSlice = createSlice({
    name: 'empresa',
    initialState: {
        empresa: null,
        pessoasEncaminhar: null,
        timeline: {
            title: "",
            obrigacoes: null
        }
    },
    reducers: {
        setDados: (state, action) => {
            state.empresa = action.payload;

        },
        setPessoasEncaminhar: (state, action) => {
            state.pessoasEncaminhar = action.payload;

        },
        setTimeline: (state, action) => {
            state.timeline = action.payload;

        },
        setTimelineTitle: (state, action) => {
            state.timeline.title = action.payload;
        },
        setPessoas: (state, action) => {
            state.pessoasEncaminhar = action.payload;
        },
        setObrigacoes: (state, action) => {
            state.timeline.obrigacoes = action.payload;
        },

    },
});

export const { setDados, setTimelineTitle, setPessoas, setObrigacoes, setPessoasEncaminhar, setTimeline } = empresaSlice.actions;
export default empresaSlice.reducer;
