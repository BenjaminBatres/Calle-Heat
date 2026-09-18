import Link from "next/link";

export default function notFound() {
  return (
    <div className="pt-35 sm:pt-40 pb-20 flex flex-col items-center justify-center gap-5 bg-chili-red text-Warm-Cream px-5">
      <h1 className="text-6xl sm:text-[200px] leading-[100%] tracking-widest">
        404
      </h1>
      <h2 className="text-5xl sm:text-8xl">Page not found</h2>
      <p className="text-center max-w-lg ">
        Oops! It looks like the page you're searching for has taken a detour.
        Let's guide you back to the heart of the Heat
      </p>
      <Link href={"/"} className="py-3 px-6 bg-card-charcoal rounded-xl">
        Go Back Home
      </Link>
    </div>
  );
}
