import {
  Area,
  CartesianGrid,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import { prices } from "domain/PriceRepository";
import moment from "moment";

function Chart() {
  const formatXAxis = (tickItem: any, index: number): string =>
    moment(tickItem, "YYYY-MM-DD[T]HH:00:00.000Z").hour().toString();

  const formatYAxis = (tickItem: any, index: number): string => tickItem + "€";

  const { data, isLoading } = useQuery("pricesData", prices);
  if (!isLoading) {
    return (
      <div className="min-w-full h-52 pt-12 pl-2 pr-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.prices} width={500} height={200}>
            <XAxis dataKey="datetime" tickFormatter={formatXAxis} />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="linear"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return <></>;
}

export default Chart;
