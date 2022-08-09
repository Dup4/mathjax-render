import Link from "next/link";
import ImageWithTheme from "./ImageWithTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Home
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://github.com/Dup4/mathjax-render">
              GitHub
            </ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/reference">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Reference
              </a>
            </Link>
          </div>
        </div>
        <div>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer">
            Powered by{" "}
            <span>
              <ImageWithTheme
                alt="Vercel Logo"
                light="/vercel-light.svg"
                dark="/vercel-dark.svg"
                width={72}
                height={16}></ImageWithTheme>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}
