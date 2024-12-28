import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Button,
} from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ChevronLeft, ChevronRightOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.png"; // Assuming the image is in the assets folder

const navItems = [
  { text: "Dashboard", icon: <SpaceDashboardOutlinedIcon /> },
  { text: "Orders", icon: <ShoppingCartOutlinedIcon /> },
  { text: "Customers", icon: <PersonOutlineOutlinedIcon /> },
  { text: "Menu", icon: <ListAltOutlinedIcon /> },
  { text: "Settings", icon: <SettingsOutlinedIcon /> },
];

const Sidebar = ({ user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    // Set the active route on initial render or when pathname changes
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box width="100%" display="flex" flexDirection="column" height="100%">
            {/* Profile Section */}
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" flexDirection="column" alignItems="center" gap="1rem">
                  {/* Profile Picture */}
                  <Box
                    component="img"
                    alt="profile"
                    src={profileImage}
                    height="100px"
                    width="100px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  {/* Profile Name */}
                  <Box textAlign="center">
                    <Typography
                      fontWeight="bold"
                      fontSize="1rem"
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {user.name}
                    </Typography>
                  </Box>
                </Box>
                {/* Sidebar Toggle Button (on mobile) */}
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <Divider sx={{ my: 1 }} />

            <List>
              {navItems.map(({ text, icon }) => {
                const lcText = text.toLowerCase(); // Converting text to lowercase for URL
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        padding: "0.25rem 1rem", // Tightened padding for ListItemButton
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem", // Removed left margin completely to bring icon closer to text
                          minWidth: "30px", // Ensuring consistent width
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          ml: "0.25rem", // Small margin for text to sit right next to icon
                          textAlign: "left", // Ensure the text is aligned properly
                          paddingLeft: "0", // Remove default padding
                        }}
                      />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

            {/* Logout Button */}
            <Box sx={{ marginTop: "auto", padding: "1rem", marginLeft: "2.5rem" }}>
              <Button
                onClick={() => {
                  // Handle logout logic here
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.grey[500], // Grey out the icon
                  textTransform: "none", // Prevent the text from being uppercase
                }}
              >
                <LogoutOutlinedIcon sx={{ marginRight: "0.5rem" }} />
                <Typography sx={{ color: theme.palette.grey[500] }}>Logout</Typography>
              </Button>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
