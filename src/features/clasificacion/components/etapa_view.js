import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import {useSelector} from 'react-redux';
import ObjetoEtapaGrupoView from './objeto_etapa_grupo_view';


function Etapa({etapa}) {
  
  const listGruposUi = etapa.objetoEtapaList.map((item)=>{
    return <ObjetoEtapaGrupoView key={item.id} name={item.nombre} listaEquipos={item.listaEquipos}></ObjetoEtapaGrupoView>
  });
  const { t, i18n } = useTranslation();

    // return (<Stack spacing={2}>
    //     <Typography variant="h5" gutterBottom>
    //     Nombre Etapa
    //   </Typography>        
    //       {listGruposUi}
    //     <Button variant="outlined"><AddIcon/> {t('grupo')}</Button>
    //     <Button variant="outlined"><AddIcon/> {t('clasificacion')}</Button>
    //     <Button variant="outlined"><AddIcon/> {t('competenciaIndividual')}</Button>
    // </Stack>);
    return (<Stack direction="column"  spacing={2}>
      <Typography variant='h3'>
        {etapa.nombre}
      </Typography>
      {listGruposUi}
    </Stack>);
    //return (<div>{listGruposUi}</div>);
}

export default Etapa;