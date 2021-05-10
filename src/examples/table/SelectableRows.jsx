<Table
  hasSelectableRows
  columns={columns}
  rows={rows}
  keyField="date"
  onRowSelectionChange={selectedRows => console.log("onRowSelectionChange", selectedRows)}
/>