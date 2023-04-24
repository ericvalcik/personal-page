export default function Home() {
  return (
    <div className="h-screen w-screen flex items-start justify-center sm:pt-40 pt-8 text-sm sm:text-base">
      <div className="w-[640px] flex flex-col justify-center items-start sm:px-0 px-4">
        <h1 className="text-[21.2px] sm:text-2xl pb-16 sm:pb-20 font-semibold">
          About
        </h1>
        <div>
          I&apos;m a developer based in the Czech Republic. I&apos;m interested
          in a wide range of topics, including web development, design and
          discovering new ways to use technology.
        </div>
        <div className="pt-6">
          I started coding in high school and got my first job as a developer in
          the first year of my bachelor&apos;s studies. I got my bachelor&apos;s
          degree in Computer Science from Masaryk University.
        </div>
        <hr className="my-12 w-full" />
        <div className="flex gap-4">
          <a
            className="underline decoration-gray-200 hover:decoration-gray-600 transition-all duration-200"
            href="#"
          >
            Twitter
          </a>
          <a
            className="underline decoration-gray-200 hover:decoration-gray-600 transition-all duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="underline decoration-gray-200 hover:decoration-gray-600 transition-all duration-200"
            href="#"
          >
            Instagram
          </a>
        </div>
        <div className="pt-20 text-gray-400 text-[11.2px] sm:text-xs">
          {`${new Date().getFullYear()}`} © Eric Valcik
        </div>
      </div>
    </div>
  );
}
