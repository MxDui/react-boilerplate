import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      py-2
    "
    >
      <h1>React Template for Next.js</h1>
      <p className="text-sm">
        <a
          className="text-blue-600 hover:underline"
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
      </p>
      <p className="text-sm">
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://nextjs.org/docs"
        >
          Next.js documentation
        </a>
      </p>
      <p className="text-sm">
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://react-query.tanstack.com/"
        >
          React Query documentation
        </a>
      </p>
      <p className="text-sm">
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://tailwindcss.com/docs"
        >
          Tailwind CSS documentation
        </a>
      </p>
    </div>
  );
};

export default Home;
