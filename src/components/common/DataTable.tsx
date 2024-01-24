import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


interface DataTableProps {
  rows: { products: any[] }; // Update the type of the "rows" prop if needed
}

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 1000,
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
];

const DashBoard: React.FC<DataTableProps> = ({ rows }) => {

  console.log(rows)
  const rowData = rows.products;

  return (
    <div style={{ width: "100%" }}>
    
      <DataGrid
        rows={rowData}
        columns={columns}
        sx={{ backgroundColor: "#ffffff" }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default DashBoard;
