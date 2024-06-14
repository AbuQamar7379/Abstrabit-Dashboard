import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";

/**
 * Dropdown component renders a styled dropdown menu with icons using Material-UI components.
 *
 * @component
 * @example
 * return (
 *   <Dropdown />
 * )
 */
export default function Dropdown({text}) {
  const [select, setSelect] = React.useState("");

  /**
   * Handles the change event for the select dropdown.
   *
   * @param {React.ChangeEvent<{ value: unknown }>} event - The change event triggered when a menu item is selected.
   */
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FormControl sx={text ? {m : 1, minWidth : 140} :{ m: 1, minWidth: 70 }} size="small">
      <InputLabel id="demo-select-small-label">
      {
        text ? text :
        <PersonIcon color="primary" />
      }
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={select}
        label="Select Comps"
        onChange={handleChange}
        disabled = {text}
      >
        <MenuItem style={{ gap: "15px", fontWeight: 600 }} value={"profile"}>
          <PersonIcon color="secondary" /> My Profile
        </MenuItem>
        <MenuItem style={{ gap: "15px", fontWeight: 600 }} value={"fds"}>
          <AccountBoxIcon color="success" /> My FDs
        </MenuItem>
        <MenuItem
          style={{ gap: "15px", fontWeight: 600 }}
          value={"transactions"}
        >
          <BarChartIcon color="primary" /> My Transactions
        </MenuItem>
        <MenuItem style={{ gap: "15px", fontWeight: 600 }} value={"logout"}>
          <LogoutIcon color="error" /> Logout
        </MenuItem>
      </Select>
    </FormControl>
  );
}
