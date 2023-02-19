import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const objetoEtapaList = [
    {
        id: 0,
        nombre: "GrupoA",
        tipo: 'grupo',
        listaEquipos: [{
            id: 0,
            nombreEquipo: "Team1"
        }, {
            id: 1,
            nombreEquipo: "Team2",
        }],
    },
    {
        id: 1,
        nombre: "GrupoB",
        tipo: 'grupo',
        listaEquipos: [{
            id: 2,
            nombreEquipo: "Team3"
        }, {
            id: 3,
            nombreEquipo: "Team4",
        }],
    }
];

const initialState = {
    etapas: [{ id: "2asfa", nombre: "Etapa 1", objetoEtapaList: objetoEtapaList }],
};

export const clasificacionSlice = createSlice(
    {
        name: 'clasificacion',
        initialState,
        reducers: {
            agregarEtapa: (state, action) => {
                let id = state.etapas.length;
                state.etapas.push({ id, nombre: `"Etapa "${state.etapas.length}`,objetoEtapaList:[] });
            },
            agregarObjetoEtapa: (state, action) => {
                //agregarObjetoEtapa (idEtapa,tipoObjetoEtapa,nombreObjetoEtapa)
                let { idEtapa, objetoEtapa } = action.payload;
                let { tipo } = objetoEtapa;

                let etapa = state.etapas.find(e => e.id = idEtapa);

                if (etapa == null) {
                    throw new Error("Etapa not found");
                }

                if (tipo = 'grupo') {
                    let id = etapa.objetoEtapaList.length;
                    etapa.objetoEtapaList.push({ id, nombre: `Grupo ${id}`, tipo: "grupo", listaEquipos: [] });
                }

            },
        }
    }
);

export const {agregarEtapa,agregarObjetoEtapa} = clasificacionSlice.actions;
export const selectEtapas = (state) => state.clasificacion.etapas;
export default clasificacionSlice.reducer;