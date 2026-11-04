import { useEffect, useState } from "react";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(
    () => document.readyState !== "complete",
  );

  useEffect(() => {
    if (!isLoading) return undefined;

    const finishLoading = () => setIsLoading(false);
    const timeoutId = window.setTimeout(finishLoading, 3000);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", finishLoading);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080e1b] px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading K&Y Operations"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-7 grid size-20 place-items-center">
          <div className="absolute inset-0 rounded-full border border-blue-200/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-blue motion-reduce:animate-none" />
          <span className="font-display text-lg font-extrabold tracking-tight text-accent-yellow">
            K&amp;Y
          </span>
        </div>
        <p className="m-0 font-display text-lg font-bold text-[#f3f6ff]">
          K&amp;Y Operations
        </p>
        <p className="mb-0 mt-2 text-sm text-[#9eafc6]">
          Preparing the website...{" "}
        </p>
        <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-accent-blue motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
