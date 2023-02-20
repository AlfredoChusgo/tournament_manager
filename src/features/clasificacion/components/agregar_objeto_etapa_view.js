import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import AgregarGrupoDialog from '../dialogs/agregar_grupo_dialog';

function AgregarObjetoEtapaView({etapaId}) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    //setSelectedValue(value);
  };

  return (<Stack spacing={2}>
    <Button variant="outlined" onClick={handleClickOpen}>
      <AddIcon></AddIcon>{t('grupo')}
    </Button>
    <Button variant="outlined" >
      <AddIcon></AddIcon>{t('clasificacionIndividual')}
    </Button>

    <AgregarGrupoDialog
        etapaId={etapaId}
        open={open}
        onClose={handleClose}
      />

  </Stack>);
}

export default AgregarObjetoEtapaView;