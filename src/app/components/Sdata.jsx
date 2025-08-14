// src/app/components/Sdata.jsx
"use client"; // Ensure it's a client component

import React from "react";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import { MenuItem, Avatar, ListItemIcon } from "@mui/material";

const Sdata = [
  {
    id: "cart",
    content: [
      <MenuItem key="cart1">
        <Avatar sx={{ width: 24, height: 24 }} /> Cart Item 1
      </MenuItem>,
      <MenuItem key="cart2">
        <Avatar sx={{ width: 24, height: 24 }} /> Cart Item 2
      </MenuItem>,
    ],
  },
  {
    id: "email",
    content: [
      <MenuItem key="email1">Inbox 1</MenuItem>,
      <MenuItem key="email2">Inbox 2</MenuItem>,
    ],
  },
  {
    id: "notifications",
    content: [
      <MenuItem key="notif1">Task 1 due today</MenuItem>,
      <MenuItem key="notif2">Server down alert</MenuItem>,
    ],
  },
  {
    id: "profile",
    content: [
      <MenuItem key="profile1">
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add Account
      </MenuItem>,
      <MenuItem key="profile2">
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>,
      <MenuItem key="profile3">
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>,
    ],
  },
];

export default Sdata;
