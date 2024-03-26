import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShopIcon from '@mui/icons-material/Shop';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CropFreeIcon from '@mui/icons-material/CropFree';
import StyleIcon from '@mui/icons-material/Style';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { CardGiftcardSharp } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant='h4' style={{paddingLeft: '20px'}}>LOGO</Typography>
      <List>
        {['Shop', 'Clothing', 'Frames', 'Gift','Stationary', 'Cards','Deals'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 7 === 0 ? <ShopIcon /> : 
                index % 7 === 1 ? <CheckroomIcon /> : 
                index % 7 === 2 ? <CropFreeIcon /> : 
                index % 7 === 3 ? <CardGiftcardSharp /> : 
                index % 7 === 4 ? <DesignServicesIcon /> : 
                index % 7 === 5 ? <StyleIcon/> : <LocalOfferIcon />
                 }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div className=''>
        <Box sx={{ display: 'flex', alignItems: 'center', background: '#fff' }}>
      <Button onClick={toggleDrawer(true)}><MenuSharpIcon style={{ color: "black" }} /></Button>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center',width: '100%' }}><Typography variant='h5'>LOGO</Typography></Box>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}