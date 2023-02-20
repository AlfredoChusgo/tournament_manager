import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Etapa from './components/etapa_view';
import AgregarEtapaView from './components/agregar_etapa_view';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { selectEtapas } from './clasificacion_slice';
import AgregarObjetoEtapaView from './components/agregar_objeto_etapa_view';

function ClasificacionView() {
  const dispatch = useDispatch();
  const etapas = useSelector(selectEtapas);

  const etapasView = etapas.map(e => <Grid item><Etapa key={e.id} etapa={e}></Etapa>
    <AgregarObjetoEtapaView etapaId={e.id}></AgregarObjetoEtapaView></Grid>);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={1} rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>

          {etapasView}

          <Grid item xs={4}>
            <AgregarEtapaView></AgregarEtapaView>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ClasificacionView;