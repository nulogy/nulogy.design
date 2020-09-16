(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    XjaO: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        l = a.n(n),
        o = a("TJpk"),
        r = a("xj1T"),
        c = a.n(r),
        s = a("yoZo"),
        i = a("Kvkj"),
        d = a("ttvI"),
        u = [
          {
            name: "label",
            type: "string",
            defaultValue: "Required",
            description: "The label used in the header of the table column"
          },
          {
            name: "dataKey",
            type: "string",
            defaultValue: "Required",
            description:
              "Unique key for the column, used as the keys to define cell content for the column of each row"
          },
          {
            name: "align",
            type: "string enum ('left', 'right' or 'center')",
            defaultValue: "left",
            description:
              "sets the alignment of the text for the column in the default cell"
          },
          {
            name: "cellFormatter",
            type: "function",
            description:
              "Used to format the table cells in the column. It should return a string or react component."
          },
          {
            name: "cellRenderer",
            type: "function",
            description:
              "Used to override the cell component in the column. No padding or other styles will be added in this case. It should return a react component."
          },
          {
            name: "headerFormatter",
            type: "function",
            description:
              "Used to format the column's header. It should return a string or react component."
          }
        ],
        m = [
          {
            name: "id",
            type: "string",
            description:
              "Unique id for each row, required if another keyField is not passed to the Table"
          },
          {
            name: "heading",
            type: "string",
            description:
              "Creates a heading out of the row that spans the full-width of the table"
          },
          {
            name: "cellRenderer",
            type: "function",
            description:
              "Used to override the cell component in the row. No padding or other styles will be added in this case. It should return a react component."
          },
          {
            name: "expandAriaLabel",
            type: "string",
            default: "expand",
            description:
              "When hasExpandableRows is true, replaces the aria-label for the expand button"
          },
          {
            name: "collapseAriaLabel",
            type: "string",
            default: "expand",
            description:
              "When hasExpandableRows is true, replaces the aria-label for the collapse button"
          },
          {
            name: "selectAriaLabel",
            type: "string",
            default: "select",
            description:
              "When hasSelectableRows is true, replaces the aria-label for the unchecked checkbox"
          },
          {
            name: "deselectAriaLabel",
            type: "string",
            default: "deselect",
            description:
              "When hasSelectableRows is true, replaces the aria-label for the checked checkbox"
          }
        ],
        h = [
          {
            name: "cellData",
            type: "string",
            description:
              "Text in the current cell, as passed in in the rows object"
          },
          {
            name: "column",
            type: "column",
            description: "The column object the cell belongs to"
          },
          {
            name: "row",
            type: "row",
            description: "The row object the cell belongs to"
          }
        ],
        p = [
          {
            name: "column",
            type: "column",
            description: "The current column object"
          }
        ],
        y = [
          {
            name: "columns",
            type: "array",
            defaultValue: "Required",
            description:
              "An array of column objects consisting of a label and dataKey and optionally, align and cellRenderer"
          },
          {
            name: "rows",
            type: "array",
            defaultValue: "Required",
            description:
              "An array of row objects, where the key name matches the dataKey of the column"
          },
          {
            name: "loading",
            type: "boolean",
            defaultValue: "false",
            description:
              "A boolean that will show the table body in a loading state when set to true"
          },
          {
            name: "noRowsContent",
            type: "string",
            defaultValue: "No records have been created for this table.",
            description: "What to display when the table has no data"
          },
          {
            name: "keyField",
            type: "string",
            defaultValue: "id",
            description:
              "The name of the key to use as a unique identifier for individual rows"
          },
          {
            name: "stickyHeader",
            type: "boolean",
            defaultValue: "false",
            description:
              "Sets the table header to sticky. NOTE: the vertical position of the sticky header is aligned to the top of the Table. If there is padding on an element wrapping the Table you will see that the header is offset according to the top padding."
          },
          {
            name: "hasSelectableRows",
            type: "boolean",
            defaultValue: "false",
            description:
              "Displays a column of checkboxes allowing the user to select rows in the table"
          },
          {
            name: "selectedRows",
            type: "array",
            defaultValue: "empty",
            description:
              "An array of row id's that are marked as selected in the table"
          },
          {
            name: "onRowSelectionChange",
            type: "function",
            defaultValue: "none",
            description:
              "The function that should be called when a row selection changes. The array of rows currently selected is passed in as an argument."
          },
          {
            name: "expandedRows",
            type: "array",
            defaultValue: "empty",
            description: "An array of row id's that are expanded in the table"
          },
          {
            name: "onRowExpansionChange",
            type: "function",
            defaultValue: "none",
            description:
              "The function that should be called when a row is expanded or collapsed. The array of rows currently expanded is passed in as an argument."
          },
          {
            name: "rowsPerPage",
            type: "number",
            defaultValue: "none",
            description: "The number of rows to display per page"
          },
          {
            name: "onPageChange",
            type: "function",
            defaultValue: "none",
            description:
              "The function that should be called when a current page changes. The page number that is currently selected is passed in as an argument."
          },
          {
            name: "rowHovers",
            type: "boolean",
            defaultValue: "true",
            description:
              "Whether or not to show a light grey background on a row when hovering it"
          },
          {
            name: "compact",
            type: "boolean",
            defaultValue: "false",
            description: "Whether or not to display the table in compact mode"
          },
          {
            name: "selectAllLabel",
            type: "string",
            default: "select all",
            description:
              "When hasSelectableRows is true, replaces the aria-label for the unchecked select all checkbox"
          },
          {
            name: "deselectAriaLabel",
            type: "string",
            default: "Deselect all",
            description:
              "When hasSelectableRows is true, replaces the aria-label for the checked select all checkbox"
          }
        ],
        b = [
          { label: "Date", dataKey: "date" },
          { label: "Expected Quantity", dataKey: "expectedQuantity" },
          { label: "Actual Quantity", dataKey: "actualQuantity" }
        ],
        w = [
          { label: "Date", dataKey: "date", width: "40%" },
          { label: "Expected Quantity", dataKey: "expectedQuantity" },
          { label: "Actual Quantity", dataKey: "actualQuantity" }
        ],
        f = [
          {
            date: "2019-10-01",
            expectedQuantity: "2,025 eaches",
            actualQuantity: "1,800 eaches",
            id: "r1"
          },
          {
            date: "2019-10-02",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "2,250 eaches",
            id: "r2"
          },
          {
            date: "2019-10-03",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "1,425 eaches",
            id: "r3"
          },
          {
            date: "2019-10-04",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "675 eaches",
            id: "r4"
          },
          {
            date: "2019-10-07",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "1,575 eaches",
            id: "r5"
          },
          {
            date: "2019-10-22",
            expectedQuantity: "1,725 eaches",
            actualQuantity: "-",
            id: "r6"
          },
          {
            date: "2019-10-23",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "-",
            id: "r7"
          },
          {
            date: "2019-10-24",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "-",
            id: "r8"
          }
        ],
        g = [
          {
            date: "2019-10-01",
            expectedQuantity: "2,025 eaches",
            actualQuantity: "1,800 eaches",
            id: "r1"
          },
          {
            date: "2019-10-02",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "2,250 eaches",
            id: "r2",
            expandedContent: function() {
              return l.a.createElement(
                s.d,
                { bg: "lightBlue", py: "x1", px: "x2" },
                l.a.createElement(
                  i.c,
                  { mb: 0, fontWeight: "bold", color: "blackBlue" },
                  "Expands!"
                )
              );
            }
          },
          {
            date: "2019-10-03",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "1,425 eaches",
            id: "r3"
          },
          {
            date: "2019-10-04",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "675 eaches",
            id: "r4"
          },
          {
            date: "2019-10-07",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "1,575 eaches",
            id: "r5"
          },
          {
            date: "2019-10-22",
            expectedQuantity: "1,725 eaches",
            actualQuantity: "-",
            id: "r6"
          },
          {
            date: "2019-10-23",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "-",
            id: "r7"
          },
          {
            date: "2019-10-24",
            expectedQuantity: "2,475 eaches",
            actualQuantity: "-",
            id: "r8"
          }
        ],
        E = [
          {
            label: "Date",
            dataKey: "date",
            cellFormatter: function(e) {
              var t = e.cellData;
              return new Date(t).toDateString();
            }
          },
          { label: "Expected Quantity", dataKey: "expectedQuantity" },
          { label: "Actual Quantity", dataKey: "actualQuantity" },
          {
            label: "Remove all",
            dataKey: "actions",
            headerFormatter: function(e) {
              var t = e.label;
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(s.C, { icon: "delete" }, t)
              );
            },
            cellRenderer: function() {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(s.C, { icon: "delete" }, "Remove")
              );
            }
          }
        ],
        x = [
          {
            date: "Total",
            expectedQuantity: "18,000 eaches",
            actualQuantity: "7,725 eaches",
            id: "r1"
          },
          {
            date: "Attainment",
            expectedQuantity: "",
            actualQuantity: "41.5%",
            id: "r2"
          }
        ];
      t.default = function() {
        var e, t;
        return l.a.createElement(
          i.h,
          { propsTable: l.a.createElement(i.i, { propsRows: y }) },
          l.a.createElement(
            o.Helmet,
            null,
            l.a.createElement("title", null, "Table")
          ),
          l.a.createElement(
            i.e,
            null,
            l.a.createElement(s.fb, null, "Table"),
            l.a.createElement(
              s.d,
              { mb: "x3" },
              l.a.createElement(
                i.f,
                null,
                "Tables are used for displaying columns and rows of data."
              )
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.Z, { columns: b, rows: f, keyField: "date" }),
            l.a.createElement(
              c.a,
              { className: "js" },
              'import {Table} from "@nulogy/components";\n\nconst columns = [\n  { label: "Date", dataKey: "date" },\n  { label: "Expected Quantity", dataKey: "expectedQuantity" },\n  { label: "Actual Quantity", dataKey: "actualQuantity" }\n];\n\nconst rows = [\n  {\n    date: "2019-10-01",\n    expectedQuantity: "2,025 eaches",\n    actualQuantity: "1,800 eaches",\n    id: "r1"\n  },\n  {\n    date: "2019-10-02",\n    expectedQuantity: "2,475 eaches",\n    actualQuantity: "2,250 eaches",\n    id: "r2"\n  },\n  {\n    date: "2019-10-03",\n    expectedQuantity: "2,475 eaches",\n    actualQuantity: "1,425 eaches",\n    id: "r3"\n  },\n  ...\n  {\n    date: "2019-10-24",\n    expectedQuantity: "2,475 eaches",\n    actualQuantity: "-",\n    id: "r8"\n  }\n];\n\n<Table columns={columns} rows={rows} keyField="date"/>\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Customizing cell display"),
            l.a.createElement(
              i.c,
              null,
              "A custom component can be implemented using a",
              " ",
              l.a.createElement(i.d, null, "CellFormatter"),
              " (to maintain the existing cell styles) or ",
              l.a.createElement(i.d, null, "CellRenderer"),
              " (for completely custom styles)."
            ),
            l.a.createElement(
              i.c,
              null,
              "Similarly headers can be customized using the",
              " ",
              l.a.createElement(i.d, null, "HeaderFormatter"),
              " function props. See",
              " ",
              l.a.createElement(
                s.E,
                (((e = { href: d.a + "asyncselect--default" }).href =
                  "https://storybook.nulogy.design/?path=/story/table--with-a-cell-formatter"),
                e),
                "Storybook"
              ),
              " ",
              "for other examples of implementing different custom components."
            ),
            l.a.createElement(s.Z, { columns: E, rows: f, keyField: "date" }),
            l.a.createElement(
              c.a,
              { className: "js" },
              'const customCellRenderer = ({cellData}) => (\n    <IconicButton icon="delete">{cellData}</IconicButton>\n);\nconst dateToString = ({cellData}) => {\n  return new Date(cellData).toDateString();\n};\n\nconst customHeaderFormatter = ({ label }) => (\n  <>\n    <IconicButton icon="delete">{label}</IconicButton>\n  </>\n);\n\nconst columnsWithCustomCells = [\n  { label: "Date", dataKey: "date", cellFormatter: dateToString },\n  { label: "Expected Quantity", dataKey: "expectedQuantity",},\n  { label: "Actual Quantity", dataKey: "actualQuantity",},\n  {\n    label: "Remove all",\n    dataKey: "actions",\n    headerFormatter: customHeaderFormatter,\n    cellRenderer: customCellRenderer\n  }\n];\n\n<Table columns={columnsWithCustomCells} rows={rows} />\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Selectable rows"),
            l.a.createElement(
              i.c,
              null,
              "Setting ",
              l.a.createElement(i.d, null, "hasSelectableRows"),
              " on the Table will add a column of checkboxes to the table so that rows can be selected by the user. Using the checkbox in the head of the table will toggle the selection of all rows."
            ),
            l.a.createElement(
              i.c,
              null,
              "A ",
              l.a.createElement(i.d, null, "keyField"),
              " should be specified to provide unique ",
              l.a.createElement(i.d, null, "id"),
              's for rows (by default the keyField will be "id" and expect a property of id in the row objects).'
            ),
            l.a.createElement(s.Z, {
              hasSelectableRows: !0,
              columns: b,
              rows: f,
              keyField: "date",
              onRowSelectionChange: function(e) {
                return e;
              }
            }),
            l.a.createElement(
              c.a,
              { className: "js" },
              '<Table\n  columns={columns}\n  rows={rows}\n  keyField="date"\n  HasSelectableRows\n  onRowSelectionChange={selectedRows => selectedRows}\n/>\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Column widths"),
            l.a.createElement(
              i.c,
              null,
              "A width for a column can be set (as actual size or percentage) inside the column data."
            ),
            l.a.createElement(s.Z, { columns: w, rows: f }),
            l.a.createElement(
              c.a,
              { className: "js" },
              'const columnsWithWidths = [\n  { label: "Date", dataKey: "date", width: "40%" },\n  { label: "Expected Quantity", dataKey: "expectedQuantity" },\n  { label: "Actual Quantity", dataKey: "actualQuantity" }\n];\n\n<Table columns={columnsWithWidths} rows={rows} />'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Loading state"),
            l.a.createElement(
              i.c,
              null,
              "The table can be set to loading while row data is being fetched. It will show rows when the ",
              l.a.createElement(i.d, null, "loading"),
              " prop is set to false."
            ),
            l.a.createElement(s.Z, { loading: !0, columns: b, rows: f }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<Table loading columns={columns} rows={rows} />"
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Compact Styling"),
            l.a.createElement(
              i.c,
              null,
              "The table can be set to use compact styling which decreases the paddings when the ",
              l.a.createElement(i.d, null, "compact"),
              " prop is set to true."
            ),
            l.a.createElement(s.Z, { columns: b, rows: f, compact: !0 }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<Table columns={columns} rows={rows} compact />"
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Sticky Header"),
            l.a.createElement(
              i.c,
              null,
              "The table header can remain fixed to the top of the table when scrolling by setting the prop stickyHeader to true."
            ),
            l.a.createElement(s.Z, { columns: b, rows: f, stickyHeader: !0 }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<Table columns={columns} rows={rows} stickyHeader />"
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Footer"),
            l.a.createElement(
              i.c,
              null,
              "A footer can be added to the table by adding an array of rows to the",
              " ",
              l.a.createElement(i.d, null, "footerRows"),
              " prop."
            ),
            l.a.createElement(s.Z, { columns: b, rows: f, footerRows: x }),
            l.a.createElement(
              c.a,
              { className: "js" },
              'import {Table} from "@nulogy/table";\n\nconst footerRows = [\n  { date: "Total", expectedQuantity: "18,000 eaches", actualQuantity: "7,725 eaches" },\n  { date: "Attainment", expectedQuantity: "", actualQuantity: "\t41.5%" }\n];\n\n<Table columns={columns} rows={rows} footerRows={footerRows} />\n'
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Pagination"),
            l.a.createElement(
              i.c,
              null,
              "Setting ",
              l.a.createElement(i.d, null, "rowsPerPage"),
              " on the Table will add a",
              " ",
              l.a.createElement(
                s.E,
                { href: "https://nulogy.design/components/pagination" },
                "Pagination"
              ),
              " ",
              "component to the table. A maximum of the specified",
              " ",
              l.a.createElement(i.d, null, "rowsPerPage"),
              " will be shown on each page."
            ),
            l.a.createElement(
              i.c,
              null,
              "Providing a function to ",
              l.a.createElement(i.d, null, "onPageChange"),
              " will allow tracking of the current page number. It is fired whenever the page changes and takes in the current page number as an argument."
            ),
            l.a.createElement(s.Z, {
              columns: b,
              rows: f,
              rowsPerPage: 3,
              keyField: "date",
              onPageChange: function(e) {
                return e;
              }
            }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<Table\n  columns={columns}\n  rows={rows}\n  rowsPerPage={3}\n  onPageChange={pageNum => pageNum}\n/>\n"
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Headings"),
            l.a.createElement(
              i.c,
              null,
              "Headings that span the full width of a row can be added within the table's rows. To add a heading add a row with a key of",
              " ",
              l.a.createElement(i.d, null, "heading"),
              " The appearance of the heading can be customized by adding a ",
              l.a.createElement(i.d, null, "cellRenderer"),
              " to the row. See an example in",
              " ",
              l.a.createElement(
                s.E,
                (((t = { href: d.a + "asyncselect--default" }).href =
                  "https://storybook.nulogy.design/?path=/story/table--with-full-width-section"),
                t),
                "Storybook"
              ),
              "."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Expandable rows"),
            l.a.createElement(
              i.c,
              null,
              "Setting ",
              l.a.createElement(i.d, null, "hasExpandableRows"),
              " and providing",
              " ",
              l.a.createElement(i.d, null, "expandedContent"),
              " on a row will add a button that can be used to expand and collapse content.",
              l.a.createElement(i.d, null, "expandedContent"),
              " should return a React node that should be rendered when the row is expanded."
            ),
            l.a.createElement(
              i.c,
              null,
              "A ",
              l.a.createElement(i.d, null, "keyField"),
              ' should be specified to provide unique ids for rows (by default the keyField will be "id" and expect a property of id in the row objects).'
            ),
            l.a.createElement(s.Z, {
              columns: b,
              rows: g,
              hasExpandableRows: !0,
              onRowExpansionChange: function() {}
            }),
            l.a.createElement(
              c.a,
              { className: "js" },
              "<Table\n  columns={columns}\n  rows={rowDataWithExpandedContent}\n  hasExpandableRows\n  onRowExpansionChange={() => {}}\n/>\n"
            )
          ),
          l.a.createElement(i.a, null),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Server-side or custom pagination"),
            l.a.createElement(
              i.c,
              null,
              "The",
              " ",
              l.a.createElement(
                s.E,
                { href: "https://nulogy.design/components/pagination" },
                "Pagination"
              ),
              " ",
              "and Table components can also be used together to support server-side pagination or other custom behaviour. An example of such an implementation can be found in",
              " ",
              l.a.createElement(
                s.E,
                {
                  href: d.a + "table--with-server-side-pagination-skipstoryshot"
                },
                "Storybook"
              ),
              "."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Filtering"),
            l.a.createElement(
              i.c,
              null,
              "Filtering can be implemented by passing filtered rows to the rows prop of the table. See an example of filtering in",
              l.a.createElement(
                s.E,
                { href: d.a + "table--with-filtering-skipstoryshot" },
                "Storybook"
              ),
              "."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Sorting"),
            l.a.createElement(
              i.c,
              null,
              "Sorting can be implemented using the headerFormatter to pass a",
              " ",
              l.a.createElement(
                s.E,
                { href: d.a + "table-headers--sorting-header" },
                "SortingHeader"
              ),
              " ",
              "component or another custom header to the column that should be sortable. See an example of the complete implementation with table in",
              l.a.createElement(
                s.E,
                { href: d.a + "table--with-sorting" },
                "Storybook"
              ),
              "."
            )
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Props"),
            l.a.createElement(i.i, { propsRows: y })
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Column Type"),
            l.a.createElement(i.i, { propsRows: u })
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Row Type"),
            l.a.createElement(
              i.c,
              null,
              "Rows should have keys corresponding to the dataKeys provided in the columns. In addition, there are a few extra keys used by the table that can be provided to each row"
            ),
            l.a.createElement(i.i, { propsRows: m })
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(
              s.T,
              null,
              "CellRenderer / CellFormatter Argument Type"
            ),
            l.a.createElement(
              i.c,
              null,
              "Use CellFormatter to maintain the styles within the cell while providing a custom component or string. Use CellRenderer when using completely custom styles."
            ),
            l.a.createElement(i.i, { propsRows: h })
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "HeaderFormatter Argument Type"),
            l.a.createElement(
              i.c,
              null,
              "Use HeaderFormatter to provide a custom header component. Styles on the header cell will be maintained."
            ),
            l.a.createElement(i.i, { propsRows: p })
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(s.T, null, "Resources"),
            l.a.createElement(
              s.F,
              null,
              l.a.createElement(
                s.G,
                null,
                l.a.createElement(
                  s.E,
                  { href: d.a + "table--table-with-data" },
                  "View in Storybook"
                )
              )
            )
          )
        );
      };
    },
    ttvI: function(e, t, a) {
      "use strict";
      a.d(t, "c", function() {
        return n;
      }),
        a.d(t, "a", function() {
          return l;
        }),
        a.d(t, "b", function() {
          return o;
        });
      var n = "https://storybook.nulogy.design/?path=/story/",
        l = n + "components-",
        o = n + "pages-";
    }
  }
]);
//# sourceMappingURL=component---src-pages-components-table-js-670c7e125676fa49e099.js.map
