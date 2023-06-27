import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, colors } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import Link from "next/link";
import * as React from "react";
import style from '../components/style.module.css';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "/" },
  { title: "Artists", link: "/artists" },
  { title: "Keys", link: "/keys" },
  { title: "Categories", link: "/categories" },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} style={{background: '#2a2928', color: '#fff'}}>
      <Typography variant="h6" sx={{ my: 2 }} style={{background:'#000',padding:'30px 0',margin:'0px'}}>
      <img src="favicon.ico"  role="presentation" width={10}/>
 
        this Chord
      </Typography>
      <Divider />
      <List className={style.navItem}>
        {navItems.map((item) => (
          <Link key={item.link} href={item.link}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function rgba(arg0: number, arg1: number, arg2: number, arg3: number): import("csstype").Property.Background<string | number> | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background:'black'}}>
        <Toolbar>
        <Grid container spacing={2} margin={'2px 0px'}>
          <Grid xs={2} md={2} textAlign={'center'} alignSelf={'center'} px={1} >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              
              This Chord
            </Typography>
          </Grid>
          <Grid xs={9} md={6} alignSelf={'center'}>
            <Search style={{  width: '100%'}}
            //rgba(255,255 ,255, 0.27)}}
        >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>                                                       
          </Grid>
          <Grid xs={12} md={4} alignSelf={'center'}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}  >
            {navItems.map((item) => (
              <Link href={item.link} key={item.link}>
                <Button sx={{ color: "#fff" }} className={style.navItem}>{item.title}</Button>
              </Link>
            ))}
          </Box>                                            
          </Grid>
          
        </Grid>

          
          
          
         
        </Toolbar>
      </AppBar>
      <Box component="nav" style={{ background:'black'}}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:'#2a2928',
            },
          }}

         
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ px: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
