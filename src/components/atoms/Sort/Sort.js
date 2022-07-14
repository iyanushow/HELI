import React, { useEffect, useState } from "react";
import Select from "react-select";
import { parseYear } from "../../../utils/helpers";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
  }),
};

export default function Sort({
  options,
  transactions,
  setSortedTransactions,
  sortType,
  isFiltered,
  filteredTransaction,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isFiltered[sortType]) {
      setData(transactions);
    } else {
      setData(filteredTransaction);
    }
  }, [isFiltered, setData, transactions, filteredTransaction, sortType]);

  const updateSort = option => {
    const filtered = data.filter(transaction => {
      if (sortType === "date") {
        return option.value
          ? parseYear(transaction[sortType]).month === option.value.toLowerCase()
          : transaction;
      }

      return option.value ? transaction[sortType] === option.value : transaction;
    });

    setSortedTransactions(filtered, { type: sortType, value: option.value });
  };

  return (
    <Select
      defaultValue={options[0]}
      onChange={updateSort}
      options={options}
      className="px-[12px] py-2 w-56"
      styles={customStyles}
      isSearchable={true}
      noOptionsMessage={() => "Select an input"}
    />
  );
}
