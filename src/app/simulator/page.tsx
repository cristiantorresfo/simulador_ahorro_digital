import SimulatorClient from "../components/SimulatorClient/SimulatorClient";
import { use } from "react";

interface SearchParams {
  name?: string;
  rate?: string;
}

export default function Page(props: { searchParams: Promise<SearchParams> }) {
  const searchParams = use(props.searchParams); 

  const name = searchParams.name ?? "";
  const rate = searchParams.rate ?? "0";

  return <SimulatorClient name={name} rate={rate} />;
}