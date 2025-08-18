"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Cards from "./cards";

import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 250],
  ["Rachel", 4200],
  ["Patrick", 2900],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 370],
  ["Rachel", 600],
  ["Patrick", 700],
  ["Eric", 1500],
];
export const diffdata = {
  old: dataOld,
  new: dataNew,
};

const cardData = [
  {
    title: "Total Users",
    content: "This is your dashboard content.",
    gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
    icon: <PeopleIcon sx={{ fontSize: 20, color: "white" }} />,
    trend: "up",
  },
  {
    title: "Total Product",
    content: "Manage your users here.",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)",
    icon: <InventoryIcon sx={{ fontSize: 20, color: "white" }} />,
    trend: "down",
  },
  {
    title: "Total Orders",
    content: "Configure your application.",
    gradient: "linear-gradient(to right, #ff6a00, #ee0979)",
    icon: <ShoppingCartIcon sx={{ fontSize: 20, color: "white" }} />,
    trend: "up",
  },
  {
    title: "Total Reviews",
    content: "View the latest reports.",
    gradient: "linear-gradient(to right, #00c6ff, #0072ff)",
    icon: <StarRateIcon sx={{ fontSize: 20, color: "white" }} />,
    trend: "down",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex p-4 gap-4">
        {/* Left section with 4 cards */}
        <div className="w-[70%] flex flex-wrap gap-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                width: "45%",
                height: "225px",
                background: card.gradient,
                color: "white",
                position: "relative",
                overflow: "hidden",
                paddingTop: "10px",
                borderRadius: "8px",
              }}
            >
              {/* Top-right icons */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {card.icon}
                <MoreVertIcon sx={{ fontSize: 24, color: "white" }} />
              </div>

              {/* BIG Transparent Trend Icon in center */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.15, // Transparent effect
                  fontSize: "140px",
                  color: "white",
                }}
              >
                {card.trend === "up" ? (
                  <TrendingUpIcon sx={{ fontSize: 160 }} />
                ) : (
                  <TrendingDownIcon sx={{ fontSize: 160 }} />
                )}
              </div>

              <CardContent
                sx={{ position: "relative", zIndex: 1, marginTop: "50px" }}
              >
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right section card */}
        <div className="w-[30%]">
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              height: "500px",
              background: "linear-gradient(to bottom, #f7971e, #ffd200)",
              color: "white",
              position: "relative",
              overflow: "hidden",
              paddingTop: "10px",
              borderRadius: "8px",
            }}
          >
            {/* Top-right icons */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <AttachMoneyIcon sx={{ fontSize: 40, color: "white" }} />
              <MoreVertIcon sx={{ fontSize: 24, color: "white" }} />
            </div>

            <CardContent sx={{ marginTop: "10px" }}>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="body2">$3,155,245.55</Typography>
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                diffdata={diffdata}
                options={{
                  backgroundColor: "transparent", // ✅ Transparent background
                  legend: { textStyle: { color: "white" } }, // optional: make legend text visible on dark bg
                  hAxis: { textStyle: { color: "white" } }, // optional: white axis labels
                  vAxis: { textStyle: { color: "white" } }, // optional: white axis labels
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Dashboard;
