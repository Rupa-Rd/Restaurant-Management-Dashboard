import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetOrdersQuery } from "states/api"; // Assuming you have a query to fetch order details
import Header from "components/Header";

const OrdersTable = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetOrdersQuery(); // Fetch the orders

  // Columns for the DataGrid table
  const columns = [
    {
      field: "_id",
      headerName: "Order ID",
      flex: 1,
    },
    {
      field: "items",
      headerName: "Items",
      flex: 2,
      renderCell: (params) => {
        const items = params.row.items;
        return (
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: "5px" }}>
                {item.quantity} x {item.name} @ ${item.price}
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      flex: 1,
      renderCell: (params) => `$${params.row.totalAmount.toFixed(2)}`,
    },
    {
      field: "customer",
      headerName: "Customer",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Order Date",
      flex: 1,
      renderCell: (params) => new Date(params.row.date).toLocaleString(),
    },
  ];

  // Preprocess the rows to match the structure expected by DataGrid
  const rows = data?.map((order) => ({
    _id: order._id,
    items: order.items,
    totalAmount: order.totalAmount,
    customer: order.customer, // Assuming customer is a string (name)
    date: order.date,
  }));

  return (
    <Box m="1rem 2rem">
      <Header title="Orders" />
      <Box
        mt="10px"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={rows || []}
          columns={columns}
          pageSize={5}
        />
      </Box>
    </Box>
  );
};

export default OrdersTable;
