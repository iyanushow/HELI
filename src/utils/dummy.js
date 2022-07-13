export const sortOptions = [
  {
    id: 1,
    name: "Type Sort",
    type: "type",
    options: [
      {
        id: `type${0}`,
        label: "By type",
        value: null,
      },
      {
        id: `type${1}`,
        label: "Debit",
        value: "debit",
      },
      {
        id: `type${2}`,
        label: "Credit",
        value: "credit",
      },
    ],
  },
  {
    id: 2,
    name: "Status Sort",
    type: "status",
    options: [
      {
        id: `status${0}`,
        label: "By status",
        value: null,
      },
      {
        id: `status${1}`,
        label: "Success",
        value: "success",
      },
      {
        id: `status${2}`,
        label: "Failed",
        value: "failed",
      },
      {
        id: `status${3}`,
        label: "Pending",
        value: "pending",
      },
    ],
  },
  {
    id: 3,
    name: "Date Sort",
    type: "date",

    options: [
      { id: "date0", label: "By Month", value: null },
      { id: "date1", label: "January", value: "January" },
      { id: "date2", label: "February", value: "February" },
      { id: "date3", label: "March", value: "March" },
      { id: "date4", label: "April", value: "April" },
      { id: "date5", label: "May", value: "May" },
      { id: "date6", label: "June", value: "June" },
      { id: "date7", label: "July", value: "July" },
      { id: "date8", label: "August", value: "August" },
      { id: "date9", label: "September", value: "September" },
      { id: "date10", label: "October", value: "October" },
      { id: "date11", label: "November", value: "November" },
      { id: "date12", label: "December", value: "December" },
    ],
  },
];

export const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const statusColor = {
  failed: "red",
  success: "green",
  processing: "grey",
};
