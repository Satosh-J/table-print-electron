import { React, useState, useEffect } from "react";
import { Box, useMediaQuery, Button, useTheme } from "@mui/material";

import axios from "axios";
import Datatable from "../components/common/DataTable.tsx";

const ipcRenderer = window.require("electron").ipcRenderer;

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const theme = useTheme();

  return (
    <Box>
      <Box
        display="grid"
        backgroundColor="#f9f9f9"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12"
          }
        }}
      >
        <Box
          gridColumn="span 12"
          sx={{
            backgroundColor: "#f9f9f9 !important",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "55.8rem" // Adjust the height as needed
          }}
        >
          <Box
            mt="8rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            {data.length !== 0 && <Datatable rows={data}></Datatable>}
          </Box>
          <Box
            mt="1rem"
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              sx={{
                height: "3.8rem",
                width: "47rem",
                borderRadius: "1rem 1rem 1rem 1rem",
                backgroundColor: "#431ced",
                color: "#fff",
                fontSize: "1.5rem",
                textTransform: "none",
                boxShadow: "#222 1px 0px 5px 0px"
              }}
              onClick={() => {
                window.print();
              }}
            >
              Print
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
