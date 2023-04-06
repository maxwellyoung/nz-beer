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
      <main className="flex  h-screen w-screen flex-col items-center justify-center bg-slate-800 text-white">
        <div className="text-center text-2xl">
          Which is the best <span className="italic text-red-500">NZ </span>
          Beer?
        </div>
        <div className="p-2"></div>
        <div className="flex max-w-2xl items-center justify-between rounded border p-8">
          <div className="h-16 w-16 bg-red-200"></div>
          <div className="p-8">Vs</div>
          <div className="h-16 w-16 bg-red-200"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
