import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const formatDateISO = (date) => {
  return date.toISOString().split("T")[0];  
}

const HolidayList = () => {
  const [language, setLanguage] = useState('DE');

  const currentDate = new Date()
  const endDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDay())

  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchHoliday", language],
    queryFn: () =>
      fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${language}&languageIsoCode=EN&validFrom=${formatDateISO(currentDate)}&validTo=${formatDateISO(endDate)}`).then((res) =>
        res.json()
      ),
  });
  const holidays = data || [];

  return (
    <div className="App">
      <h1>Hello API!</h1>
      <div>
        <select name="" id="" onChange={(e) => setLanguage(e.target.value)}>
          <option value="DE">Netherland</option>
          <option value="BE">Belgium</option>
          <option value="CH">Switzerland</option>
          <option value="FR">France</option>
        </select>
      </div>
      {isLoading && <p style={{ color: "blue" }}>Loading ...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.id}>{holiday.startDate} {holiday.name[0].text}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HolidayList />
    </QueryClientProvider>
  );
}