"use client";
import BorderAnimation from "@/components/custom/BorderAnimation";

const NotFoundPage = () => {
  return (
    <div className="font-helveticaNeue">
      <BorderAnimation
        delay={0.2}
        className="min-h-[calc(100vh-225px)] mx-3 flex items-center justify-center flex-col w-full"
      >
        <h1 className="font-medium text-9xl tracking-wider text-center">404</h1>
        <p className="text-sm text-center mt-2 min-w-5">
          The page you are looking for doesn't exist or has been moved
        </p>
      </BorderAnimation>
    </div>
  );
};

export default NotFoundPage;
