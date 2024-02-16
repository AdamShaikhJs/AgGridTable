import React from 'react';
import { AgGridReact } from 'ag-grid-react';
// import { Chip, Grid } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import AddIcon from '@mui/icons-material/Add';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const StatusChip = ({ value }) => {
//   let chipColor;
//   switch (value.toLowerCase()) {
//     case 'approved':
//       chipColor = 'success';
//       break;
//     case 'draft':
//       chipColor = 'error';
//       break;
//     case 'pending approval':
//       chipColor = 'primary';
//       break;
//     default:
//       chipColor = 'success';
//       break;
//   }
//   return (
//     <Chip
//       label={value}
//       color={chipColor}
//       size="small"
//       sx={{ fontSize: '10px' }}
//     />
//   );
// };

// const StatusChipMap = ({ value }) => {
//   let chipColor;
//   switch (value.toLowerCase()) {
//     case 'checked':
//       chipColor = 'success';
//       break;
//     case 'unChecked':
//       chipColor = 'error';
//       break;
//     default:
//       chipColor = 'default';
//       break;
//   }
//   return <CheckCircleOutlineIcon fontSize="small" color="success" mt={1} />;
// };

// const ActionButtons = () => (
//   <div>
//     <IconButton
//       size="small"
//       color="primary"
//       onClick={() => console.log('Edit clicked')}
//     >
//       <EditIcon />
//     </IconButton>
//     <IconButton
//       size="small"
//       color="error"
//       onClick={() => console.log('Delete clicked')}
//     >
//       <DeleteIcon />
//     </IconButton>
//     <IconButton
//       size="small"
//       color="info"
//       onClick={() => console.log('Copy clicked')}
//     >
//       <FileCopyIcon />
//     </IconButton>
//     <IconButton
//       size="small"
//       color="success"
//       onClick={() => console.log('Add clicked')}
//     >
//       <AddIcon />
//     </IconButton>
//   </div>
// );

const App = () => {
  const columnDefs = [
    { headerCheckboxSelection: true, checkboxSelection: true, width: 50 },
    { headerName: 'Target', field: 'target', width: 120 },
    { headerName: 'Last Modified By', field: 'lastModifiedBy', width: 200 },
    { headerName: 'Last Modified Date', field: 'lastModifiedDate', width: 170 },
    { headerName: 'Map Version', field: 'mapVersion', width: 150 },
    {
      headerName: 'Map Status',
      field: 'mapStatus',
      cellRendererFramework: StatusChip,
      width: 170,
    },
    {
      headerName: 'Dry Run Status',
      field: 'dryRunStatus',
      width: 150,
      // cellRendererFramework: StatusChipMap,
    },
    {
      headerName: 'Action',
      field: 'action',
      width: 300,
      // cellRendererFramework: () => <ActionButtons />,
    },
  ];

  const rowData = [
    {
      id: 1,
      target: 'AE',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'approved',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 2,
      target: 'ME',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'draft',
      dryRunStatus: 'checked',
      filed: 'done',
    },
    {
      id: 3,
      target: 'FE',
      lastModifiedBy: 'dummygmail@gmail.com',
      lastModifiedDate: '12/02/2024',
      mapVersion: 'V2',
      mapStatus: 'pending Approval',
      dryRunStatus: 'unChecked',
      filed: 'done',
    },
  ];

  return (
    <Grid container>
      <div className="ag-theme-alpine" style={{ width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
        />
      </div>
    </Grid>
  );
};

export default App;
