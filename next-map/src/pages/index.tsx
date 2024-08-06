import Image from "next/image";
import { Inter } from "next/font/google";

type Repo = {
  name: string;
  stargazers_count: number;
};

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
