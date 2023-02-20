// este ui debe mostrar un grupo
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreIcon from '@mui/icons-material/MoreVert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(0),
    '@media all': {
        minHeight: 30,
    },
}));

function ObjetoEtapaGrupoView({ name, listaEquipos = [] }) {
    const { t, i18n } = useTranslation();
    const listaEquiposView = listaEquipos.map(e => {
        let name = e.nombreEquipo ?? t("lugarVacio").toUpperCase();
        let textColor = e.nombreEquipo!=null ? {}: {color:'error.dark'};
        return <ListItem key={e.id} sx={{ p: 0 }}>
            <ListItemButton>
                <ListItemText sx={textColor} key={e.id}
                    primary={name}
                />
            </ListItemButton>
        </ListItem>
    }
    );
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {name}
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="close">
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" color="inherit" aria-label="close">
                        <DeleteIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List sx={{p:0}}>
                {listaEquiposView}
            </List>
        </Box>);
}
export default ObjetoEtapaGrupoView;