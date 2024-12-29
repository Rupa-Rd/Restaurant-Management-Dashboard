import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useGetCustomersQuery } from "states/api";

const Customer = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  // Preprocess data to dynamically generate columns for each order
  const columns = [
    {
      field: "_id",
      headerName: "Customer ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Customer Name",
      flex: 1,
    },
    // Dynamically adding columns for each order
    ...(data && data.length > 0
      ? data[0].orders.map((order, index) => ({
          field: `order_${index + 1}_items`,
          headerName: `Order ${index + 1} Items`,
          flex: 1,
          renderCell: (params) => {
            const orderItems = params.row.orders?.[index]?.items;
            if (!orderItems) return null; // Return null if no items found

            return (
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {orderItems.map((item) => (
                  <li key={item._id}>
                    {item.quantity} x {item.name} @ ${item.price}
                  </li>
                ))}
              </ul>
            );
          },
        }))
      : []),
    ...(data && data.length > 0
      ? data[0].orders.map((order, index) => ({
          field: `order_${index + 1}_totalAmount`,
          headerName: `Order ${index + 1} Total`,
          flex: 0.5,
          renderCell: (params) => {
            const totalAmount = params.row.orders?.[index]?.totalAmount;
            if (totalAmount === undefined) return null; // Return null if totalAmount is undefined

            return `$${totalAmount.toFixed(2)}`;
          },
        }))
      : []),
  ];

  // Preprocess the rows to include order details
  const rows = data?.map((customer) => ({
    _id: customer._id,
    name: customer.name,
    orders: customer.orders, // Store the order details here to render dynamically in columns
  }));

  return (
    <Box m="1rem 2rem">
      <Header title="Customers" />
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

export default Customer;
