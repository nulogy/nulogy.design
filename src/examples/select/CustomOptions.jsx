<Select
  defaultValue={["accepted"]}
  noOptionsMessage={() => "No options"}
  placeholder="Please select inventory status"
  options={[
    { value: "accepted", label: "Accepted" },
    { value: "assigned", label: "Assigned to a line" },
    { value: "hold", label: "On hold" },
    { value: "rejected", label: "Rejected" },
    { value: "open", label: "Open" },
    { value: "progress", label: "In progress" },
    { value: "quarantine", label: "In quarantine" }
  ]}
  components={{
    Option: ({ children, ...props }) => (<SelectOption {...props}>
      <>
        <Box as="span" display="inline-block" height="10px" width="10px" bg="yellow" borderRadius="circle" mr="half"></Box>
        {children}
      </>
    </SelectOption>
    )
  }}
  labelText="Inventory status"
  menuPosition="fixed"
/>

