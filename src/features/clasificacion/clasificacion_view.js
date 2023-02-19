import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Etapa from './components/etapa_view';
import AgregarEtapaView from './components/agregar_etapa_view';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import {selectEtapas} from './clasificacion_slice';

function ClasificacionView() {
  const dispatch = useDispatch();
  const etapas = useSelector(selectEtapas);

  const etapasView = etapas.map(e=> <Etapa key={e.id} etapa={e}></Etapa>);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={1} rowSpacing={5} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item>
            {/* <Etapa></Etapa>
            <Etapa></Etapa> */}
            {etapasView}
          </Grid>
          <Grid item xs={4}>
            <AgregarEtapaView></AgregarEtapaView>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ClasificacionView;