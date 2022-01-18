import {
  Line,
  CartesianGrid,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import { prices } from "domain/PriceRepository";
import moment from "moment";

function Chart() {

  const formatYAxis = (tickItem: any, index: number): string => tickItem + "€";

  const CustomTooltip = ( { active, payload, label} :any):any => {
    if (active && payload && payload.length) {
      const day = moment(label, "YYYY-MM-DD[T]HH:00:00.000Z").format("MMM DD, H[h]");
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

  const { data, isLoading } = useQuery("pricesData", prices);
  if (!isLoading) {
    return (
      <div className="min-w-full h-52 pt-12 pl-2 pr-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.prices} width={500} height={200}>
            <XAxis dataKey="datetime" label={"Hora"} tick={false}/>
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip content={<CustomTooltip/>}  />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="linear"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return <></>;
}

export default Chart;
