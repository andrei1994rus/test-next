import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import {useEffect,useMemo,useState} from 'react';
import dynamic from 'next/dynamic';

const Menu=dynamic(()=>import('./menu'));

let isBindedMenuButton:boolean=false;

export default function NavigationBar()
{
  const [showMenu,setShowMenu]=useState(false);
  useEffect(()=>
  {
    const menuButton=document.querySelector('[data-testid~="MenuIcon"]')!
    bindMenu(menuButton);
  },[]);

  const bindMenu=(menuButton:Element)=>
  {
    menuButton.addEventListener('click',function(e)
    {
      setShowMenu(!showMenu);
    });
    isBindedMenuButton=true;
  };

  const memoShowMenu=useMemo(()=>
  {
    if(isBindedMenuButton)
    {
      isBindedMenuButton=showMenu;
      const menuButton=document.querySelector('[data-testid~="MenuIcon"]')!
      bindMenu(menuButton);
      return showMenu;
    }
    
    return false;
  },[showMenu]);

  return (
    <Box sx={{flexGrow:1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr:2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{flexGrow:1}}>
            <Link href={'/'}>Test Next App</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {(memoShowMenu) ? <Menu/> : <></>}
    </Box>
  );
};