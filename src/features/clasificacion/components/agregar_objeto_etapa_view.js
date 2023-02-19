import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';

function AgregarObjetoEtapaView() {
  const { t, i18n } = useTranslation();
  return (<Stack spacing={2}>
    <Button variant="outlined">
      <AddIcon></AddIcon>{t('grupo')}</Button>
    <Button variant="outlined"><AddIcon></AddIcon>{t('clasificacionIndividual')}</Button>
  </Stack>);
}

export default AgregarObjetoEtapaView;