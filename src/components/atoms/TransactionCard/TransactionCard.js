import React from "react";
import { statusColor } from "../../../utils/dummy";
import { parseFullDate } from "../../../utils/helpers";

const TransactionCard = ({ name, amount, date, email, status, type }) => {
  const { formatDate, formatTime } = parseFullDate(date);

  return (
    <div className=" mb-10 md:my-2.5 flex  md:gap-5 flex-wrap">
      <div className="py-2.5">
        <div className="text-xs text-zinc-700 flex md:flex-col gap-1 mb-2">
          <p>{formatDate}</p>
          <p>{formatTime}</p>
        </div>

        <div className="text-xs">
          <p
            className={`uppercase md:text-center ${
              type === "debit" ? "text-red-500" : "text-green-500"
            }`}
          >
            {type}
          </p>
        </div>
      </div>

      <div className="bg-slate-50 shadow-lg rounded border border-zinc-200 flex items-center flex-grow  justify-between pl-5 pr-10 py-1.5 text-zinc-500">
        <div>
          <h1 className="text-zinc-600 text-sm md:text-lg uppercase mb-1">{name}</h1>
          <p className="text-sm mb-0.5">{amount}</p>
          <h2 className="text-xs md:text-sm">{email}</h2>
        </div>
        <div className={`uppercase text-xs text-center text-${statusColor[status]}-500 `}>
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
