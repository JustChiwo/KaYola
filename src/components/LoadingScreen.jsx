import { useEffect, useState } from "react";

function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(
    () => document.readyState !== "complete",
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isMounted) return undefined;

    const minimumVisibleDuration = 500;
    const startedAt = Date.now();
    let hasFinished = false;
    let finishTimeoutId;
    let removeTimeoutId;
    const completeLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      window.clearTimeout(finishTimeoutId);
      setIsVisible(false);
      removeTimeoutId = window.setTimeout(() => setIsMounted(false), 300);
    };
    const finishLoading = () => {
      if (hasFinished || finishTimeoutId !== undefined) return;

      const remainingDuration =
        minimumVisibleDuration - (Date.now() - startedAt);
      if (remainingDuration > 0) {
        finishTimeoutId = window.setTimeout(
          completeLoading,
          remainingDuration,
        );
        return;
      }

      completeLoading();
    };
    const timeoutId = window.setTimeout(finishLoading, 2700);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(finishTimeoutId);
      window.clearTimeout(removeTimeoutId);
      window.removeEventListener("load", finishLoading);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#080e1b] px-6 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-7 grid size-20 place-items-center">
          <div className="absolute inset-0 rounded-full border border-blue-200/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-blue motion-reduce:animate-none" />
          <img className="size-12" src="/logo.svg" alt="" />
        </div>
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
