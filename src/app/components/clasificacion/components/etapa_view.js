import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

function Etapa() {
  const { t, i18n } = useTranslation();

    return (<Stack spacing={2}>
        <Typography variant="h5" gutterBottom>
        Nombre Etapa
      </Typography>        
        
        <Button variant="outlined"><AddIcon/> {t('grupo')}</Button>
        <Button variant="outlined"><AddIcon/> {t('clasificacion')}</Button>
        <Button variant="outlined"><AddIcon/> {t('competenciaIndividual')}</Button>
    </Stack>);
}

export default Etapa;