import { useEffect, useState } from "react";

const Search = ({ setSearchTransactions, transactions }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filteredTransactions = transactions.filter(({ name }) => {
      const lowerName = name.toLowerCase();
      const lowerInput = query.toLowerCase();
      return lowerName.includes(lowerInput);
    });

    setSearchTransactions(filteredTransactions, { type: "search", value: !!query });
  }, [query, transactions, setSearchTransactions]);

  return (
    <div className="my-5 px-[12px]">
      <div className="mx-auto w-full h-12">
        <input
          name="searchQuery"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Start typing here"
          className="border border-zinc-300 text-sm text-slate-800 h-full rounded w-full pl-3"
        />
      </div>
    </div>
  );
};

export default Search;
