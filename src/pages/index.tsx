import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NZ Beer Ranking</title>
        <meta
          name="description"
          content="Finally a way to determine what the best NZ Beer is"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-700 text-white">
        <div>Which is the best NZ Beer?</div>
      </main>
    </>
  );
};

export default Home;
