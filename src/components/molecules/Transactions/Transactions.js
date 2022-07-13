import React, { useEffect, useState } from "react";
import { generateYears, sortByYear } from "../../../utils/helpers";
import TransactionCard from "../../atoms/TransactionCard/TransactionCard";

const Transactions = ({ transactions = [] }) => {
  const [yearSort, setYearSort] = useState(generateYears(transactions));

  useEffect(() => {
    setYearSort(generateYears(transactions));
  }, [transactions]);

  if (!transactions?.length) {
    return (
      <h1 className="text-2xl text-zinc-700 text-center my-10 uppercase ">No Transactions Found</h1>
    );
  }

  return (
    <section className="py-10">
      {yearSort.map((year, idx) => {
        return (
          <div key={idx} className="my-10">
            <div className="w-32 py-3 px-10 border border-zinc-400 rounded text-center text-zinc-700">
              {year}
            </div>

            <div className="py-5">
              {sortByYear(transactions, year).map(transaction => (
                <TransactionCard key={transaction.id} {...transaction} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Transactions;
