<Table
  columns={[
    {
      label: "Date",
      dataKey: "date",
      cellFormatter: ({ cellData }) => {
        return new Date(cellData).toDateString();
      },
    },
    { label: "Expected Quantity", dataKey: "expectedQuantity" },
    { label: "Actual Quantity", dataKey: "actualQuantity" },
    {
      label: "Remove all",
      dataKey: "actions",
      headerFormatter: ({ label }) => (
        <>
          <IconicButton icon="delete">{label}</IconicButton>
        </>
      ),
      cellRenderer: ({ cellData }) => (
        <IconicButton icon="delete">{cellData}</IconicButton>
      ),
    },
  ]}
  rows={rows}
/>;
