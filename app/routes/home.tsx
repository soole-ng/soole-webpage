import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soole" },
    { name: "description", content: "Welcome to Soole!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
