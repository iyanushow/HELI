import { useCallback, useEffect, useState } from "react";

import { client } from "./utils/client";
import { sortOptions } from "./utils/dummy";
import { GetUsers } from "./queries/getUsers";

import "./App.css";

import Sort from "./components/atoms/Sort/Sort";
import Search from "./components/molecules/Search/Search";
import Transactions from "./components/molecules/Transactions/Transactions";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransaction, setFilteredTransaction] = useState(transactions); //second state for immutable filtering and sort
  const [isFiltered, setIsFiltered] = useState({
    search: false,
    type: false,
    status: false,
    date: false,
  });

  useEffect(() => {
    setIsLoading(true);
    const fectchData = async () => {
      const { data, loading } = await client.query({
        query: GetUsers,
      });

      setTransactions(data.transactions);
      setIsLoading(loading);
    };

    fectchData();
  }, []);

  const updateTransactions = useCallback((data, filterState) => {
    setIsFiltered(prev => ({ ...prev, [filterState.type]: filterState.value }));
    setFilteredTransaction(data);
  }, []);

  return (
    <main className="px-2 md:px-20 py-8">
      <div className="max-w-screen-lg mx-auto">
        <>
          <Search setSearchTransactions={updateTransactions} transactions={transactions} />

          <div className="flex gap-3">
            {sortOptions.map(({ id, options, type }) => {
              return (
                <Sort
                  key={id}
                  options={options}
                  sortType={type}
                  setSortedTransactions={updateTransactions}
                  isFiltered={isFiltered}
                  transactions={transactions}
                  filteredTransaction={filteredTransaction}
                />
              );
            })}
          </div>
          {isLoading ? (
            <h1 className="text-xl text-zinc-700 text-center my-10 uppercase ">Loading ...</h1>
          ) : (
            <Transactions transactions={isFiltered ? filteredTransaction : transactions} />
          )}
        </>
      </div>
    </main>
  );
}

export default App;
