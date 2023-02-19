import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import {agregarEtapa} from '../clasificacion_slice'
import {useDispatch} from 'react-redux'

function AgregarEtapaView() {
    const { t, i18n } = useTranslation();
    const  dispatch = useDispatch();
    return (
        <Box component="span" >
            <Button variant='contained' onClick={()=>dispatch(agregarEtapa())}>{t('agregarEtapa')}</Button>
            <Typography variant="subtitle1">
            {t('agregarEtapaDescripcion')}
            </Typography>
        </Box>
    );
}

export default AgregarEtapaView;