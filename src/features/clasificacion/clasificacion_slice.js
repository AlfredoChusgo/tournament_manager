import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';

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
    etapas: [
        { id: 0, nombre: "Etapa 0", objetoEtapaList: objetoEtapaList },
    //{ id: 1, nombre: "Etapa 1", objetoEtapaList: objetoEtapaList }

    ],
};

export const clasificacionSlice = createSlice(
    {
        name: 'clasificacion',
        initialState,
        reducers: {
            agregarEtapa: (state, action) => {
                let id = state.etapas.length;
                state.etapas.push({ id, nombre: `Etapa ${state.etapas.length}`,objetoEtapaList:[] });
            },
            agregarObjetoEtapa: (state, action) => {
                let { idEtapa, objetoEtapa } = action.payload;
                let { tipo,cantidadEquipos } = objetoEtapa;

                let etapa = state.etapas.find(e => e.id == idEtapa);

                if (etapa == null) {
                    throw new Error("Etapa not found");
                }

                if (tipo = 'grupo') {
                    let id = etapa.objetoEtapaList.length;

                    let listaEquipos = [];
                    for (let index = 0; index < cantidadEquipos; index++) {
                        let uidd = uuid();
                        listaEquipos.push({id:uidd})
                    }
                    
                    let newGrupo = { id, nombre: `Grupo ${id}`, tipo: "grupo", listaEquipos: listaEquipos };

                    etapa.objetoEtapaList.push(newGrupo);
                }
            },
            eliminarObjetoEtapaGrupo:(state,action)=>{
                const {etapaId,idGrupo} = action.payload;
                let etapa = state.etapas.find(e => e.id == etapaId);
                if (etapa == null) {
                    throw new Error("Etapa not found");
                }

                const grupo = etapa.objetoEtapaList.find(e=>e.id == idGrupo && e.tipo =='grupo');
                if (grupo == null) {
                    throw new Error("Grupo not found");
                }

                etapa.objetoEtapaList = etapa.objetoEtapaList.filter(objetoEtapa=>objetoEtapa.id!= idGrupo);
            }
        }
    }
);

export const {agregarEtapa,agregarObjetoEtapa,eliminarObjetoEtapaGrupo} = clasificacionSlice.actions;
export const selectEtapas = (state) => state.clasificacion.etapas;
export default clasificacionSlice.reducer;