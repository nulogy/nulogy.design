<Table
  columns={columns}
  rows={[
    {
      date: "2019-10-01",
      expectedQuantity: "2,025 eaches",
      actualQuantity: "1,800 eaches",
      id: "r1",
    },
    {
      date: "2019-10-02",
      expectedQuantity: "2,475 eaches",
      actualQuantity: "2,250 eaches",
      id: "r2",
      expandedContent,
    },
    {
      date: "2019-10-03",
      expectedQuantity: "2,475 eaches",
      actualQuantity: "1,425 eaches",
      id: "r3",
    },
    {
      date: "2019-10-04",
      expectedQuantity: "2,475 eaches",
      actualQuantity: "675 eaches",
      id: "r4",
    },
  ]}
  hasExpandableRows
  onRowExpansionChange={(e) => console.log("onRowExpansionChange", e)}
/>;
