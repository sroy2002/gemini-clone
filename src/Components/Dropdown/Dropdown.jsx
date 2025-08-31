import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const options = [
  { primary: "Fast all-around help", secondary: "2.5 Flash", selectable: true },
  { primary: "Reasoning, math & code", secondary: "2.5 Pro", selectable: true},
  {
    primary: "Upgrade to Google AI Pro",
    secondary: "Get our most capable models & features",
    selectable: false,
  },
];

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    const option = options[index]
    if(option.selectable){
      setSelectedIndex(index);
      setAnchorEl(null);
    }
    else{
      setSelectedIndex(null);
    }
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="montserrat-500">
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id="dropdown-button"
          aria-haspopup="listbox"
          aria-controls="dropdown-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{bgcolor:"#eaeaecff", paddingY:"0.1rem", paddingRight:"0.4rem", paddingLeft:"0.8rem", borderRadius:"1rem", display:"flex", justifyContent:"center", alignItems:"center" }}
        >
          <ListItemText secondary={options[selectedIndex].secondary} slotProps={{secondary: {fontFamily: "Montserrat,sans-serif", fontWeight:600, fontSize:"0.8rem"}}} />
          <ArrowDropDownIcon/>
        </ListItemButton>
      </List>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "dropdown-button",
            role: "listbox",
          },
          paper:{
            style:{
              borderRadius: "1rem",
              marginTop:"0.3rem"
            }
          }
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ px: 2, py: 1.5, color: "text.secondary", fontWeight: 500 }}
        >
          Choose your model
        </Typography>

        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <ListItemText
              primary={option.primary}
              secondary={option.secondary}
                slotProps={{primary: {fontSize: "0.8rem", fontWeight:600}, secondary:{fontSize:"0.8rem"} }}
            />
            {selectedIndex===index && <CheckCircleOutlineIcon fontSize="small"/>}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
