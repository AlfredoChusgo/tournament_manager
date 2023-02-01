import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
function AgregarEtapaView() {
    const { t, i18n } = useTranslation();
    return (
        <Box component="span" >
            <Button variant='contained'>{t('agregarEtapa')}</Button>
            <Typography variant="subtitle1">
            {t('agregarEtapaDescripcion')}
            </Typography>
        </Box>
    );
}

export default AgregarEtapaView;