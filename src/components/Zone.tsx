import PriceExamples from "components/PricesExamples";

interface Props {
  title: string;
  name: string;
  description: string;
  price?: number;
}

const background = (val: string) => {
  switch (val) {
    case "valle":
      return "bg-valle";
    case "punta":
      return "bg-punta";
    case "llana":
      return "bg-llana";
    default:
      return "";
  }
};

function Zone({ title, name, description, price }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-3xl font-bold text-left">{title}</h2>
      <div
        className={"text-left space-y-1 px-6 py-4 rounded-xl border-black border-2 shadow-black shadow-lg " + background(name)}>
        <h3 className="pb-2 text-2xl capitalize text-center font-bold">
          {name}
        </h3>
        <p className="text-xl">⏱ {description}</p>
        {price ? (
          <div className={"flex flex-row justify-content-center"}>
            <p className="text-lg">💰{price.toLocaleString()} €/kWh</p>
            <PriceExamples zone={name} price={price} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Zone;
