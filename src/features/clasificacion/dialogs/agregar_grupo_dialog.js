import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import { agregarObjetoEtapa } from '../clasificacion_slice';
import { useSelector, useDispatch } from 'react-redux';

function AgregarGrupoDialog(props) {
  const { onClose, selectedValue, open, etapaId } = props;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [cantidadEquipos,setcantidadEquipos] = React.useState(0);

  const handleClose = () => {
    onClose();
    setcantidadEquipos(0);
  };
  const handleAgregar = () => {
    //onClose();
    dispatch(agregarObjetoEtapa({idEtapa:etapaId,objetoEtapa:{tipo:'grupo',cantidadEquipos:cantidadEquipos}}))
    setcantidadEquipos(0);
    onClose();

  };

  return (
    <Dialog 
    //sx={{ '& .MuiDialog-paper': { width: '50%', maxHeight: 435 } }} maxWidth="xs"
    onClose={handleClose} open={open} 
    fullWidth={true} maxWidth='xs'
    >
      <DialogTitle>{t('agregarGrupo')}</DialogTitle>

      <DialogContent>
        <TextField type='number' fullWidth id="outlined-basic" 
        value={cantidadEquipos}
        onChange={(event)=>setcantidadEquipos(event.target.value)}
        label={t('cantidadEquipoGrupo')} variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('cancelar')}</Button>
        <Button onClick={handleAgregar} variant='contained'>{t('agregar')}</Button>
      </DialogActions>
    </Dialog>
  );
}

AgregarGrupoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //selectedValue: PropTypes.string.isRequired,
};

export default AgregarGrupoDialog;
