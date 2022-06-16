import {
  CartesianGrid,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  Cell,
} from "recharts";
import { useQuery } from "react-query";
import { prices } from "domain/PriceRepository";
import moment from "moment";
import { currentZone } from "domain/ZoneRepository";

function Chart() {
  const formatYAxis = (tickItem: any, index: number): string => tickItem + "€";

  const CustomTooltip = ({ active, payload, label }: any): any => {
    if (active && payload && payload.length) {
      const day = moment(label, "YYYY-MM-DD[T]HH:00:00.000Z").format(
        "MMM DD, H[h]"
      );

      const price = payload[0].value;
      return (
        <div className="bg-white p-2 border-2 border-bl">
          <p className="font-bold">{day}</p>
          <p>{`${price}€`}</p>
        </div>
      );
    }
    return <></>;
  };
  const bgColor = (item: any): string => {
    const zone = currentZone(moment(item.datetime).toDate());
    switch (zone.current) {
      case "valle":
        return "#28b62c";
      case "llana":
        return "#fff3cd";
      case "punta":
        return "#f8d7da";
      default:
        return "";
    }
  };

  const { data, isLoading } = useQuery("pricesData", prices);
  if (!isLoading) {
    return (
      <div className="min-w-full h-52 pt-12 pl-2 pr-12">
        <ResponsiveContainer>
          <BarChart data={data.prices}>
            <XAxis dataKey="datetime" label={"Hora"} tick={false}   padding={{ left: 0, right: 0 }}  />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip />} animationDuration={0} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="price" stroke="#8884d8">
              {data.prices.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={bgColor(entry)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return <></>;
}

export default Chart;
