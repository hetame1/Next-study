import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<{ number: number }> = async () => {
  const num = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain"
  );
  const number = await num.json();
  return {
    props: { number },
  };
};

export default function Page({
  number,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Hello World</h1>
      <p>The number is {number}</p>
    </div>
  );
}
