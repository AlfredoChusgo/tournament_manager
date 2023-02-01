import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Etapa from './components/etapa_view';
import AgregarEtapaView from './components/agregar_etapa_view';
import Grid from '@mui/material/Grid';

function ClasificacionView(){
    return (
        <React.Fragment>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item>
            <Etapa></Etapa>
            </Grid>
            <Grid item xs={1}>
            <AgregarEtapaView></AgregarEtapaView>
            </Grid>
          </Grid>
        </React.Fragment>
      );
}

export default ClasificacionView;