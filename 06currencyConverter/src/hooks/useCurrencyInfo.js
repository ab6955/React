import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(`https://data.fixer.io/api/latest?access_key=87f78d74a01bdded30f8782be78763ca&format=1`)
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
