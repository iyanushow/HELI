import dayjs from "dayjs";
import { monthsOfYear } from "./dummy";

export const parseYear = date => {
  const parsedDate = new Date(date);

  const year = parsedDate.getFullYear();
  const month = monthsOfYear[parsedDate.getMonth()].toLowerCase();

  return { year, month };
};

export const sortByYear = (transactions, year) => {
  const filtered = transactions.filter(({ id, date }) => {
    const { year: parsedYear } = parseYear(date);

    return parsedYear === year;
  });

  return filtered || [];
};

export const generateYears = transactions => {
  let years = [];

  transactions.forEach(({ date }) => {
    const { year } = parseYear(date);

    if (!years.includes(year)) {
      years.push(year);
    }
  });
  console.log(years.sort());
  return years.sort();
};

export const parseFullDate = isoDate => {
  const parsedDate = dayjs(isoDate);

  return {
    formatDate: parsedDate.format("DD-MM-YYYY"),
    formatTime: parsedDate.format("h:mm:ss A"),
  };
};
