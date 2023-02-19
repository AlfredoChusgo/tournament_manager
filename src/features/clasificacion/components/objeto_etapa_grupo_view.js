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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(0),
    '@media all': {
        minHeight: 50,
    },
}));

function ObjetoEtapaGrupoView({ name,listaEquipos = [] }) {
    const listaEquiposView = listaEquipos.map(e=>
            <ListItem key={e.id} sx={{p:0}}>
                <ListItemButton>
                <ListItemText key={e.id}
                    primary={e.nombreEquipo}                    
                />
                </ListItemButton>
            </ListItem>,
        );
    // return (<Box sx={{ flexGrow: 1 }}>
    //     <AppBar sx={{background:'green'}}position="static">
    //         <StyledToolbar>
    //             <Typography variant="h6" color="inherit" component="div">
    //                 {name}
    //             </Typography>
    //             <IconButton sx={{flexGrow:1, alignSelf:'flex-end'}} size="large" edge="end">
    //                 <Close />
    //             </IconButton>
    //         </StyledToolbar>
    //     </AppBar>
    // </Box>);
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