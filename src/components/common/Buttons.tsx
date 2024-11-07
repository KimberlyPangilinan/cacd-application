import { useState } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  action?: () => Promise<void> | void;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  loading?: boolean;
  to?: string;
  className?: string;
};

// Base Button component for common behavior
const BaseButton = ({
  title,
  action,
  to,
  className,
}: ButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (action) {
      setLoading(true);
      await action();
      setLoading(false);
    }
  };

  const buttonElement = (
    <button
      onClick={handleClick}
      className={`${className} ${loading ? "opacity-50 cursor-not-allowed animate-pulse" : ""}`}
      disabled={loading}
    >
      {loading ? "Loading..." : title}
    </button>
  );

  return to ? <Link to={to}>{buttonElement}</Link> : buttonElement;
};

// Specific button components using BaseButton
export const PrimaryStateButton = (props: ButtonProps) => (
  <BaseButton {...props} className="w-[180px] bg-cacdRed rounded-full px-8 py-2 text-sm text-white font-bold" />
);

export const PrimaryButton = (props: ButtonProps) => (
  <BaseButton {...props} className="w-[180px] bg-cacdRed rounded-full px-8 py-2 text-sm text-white font-bold" />
);

export const SecondaryButtonOutline = (props: ButtonProps) => (
  <BaseButton {...props} className="w-[220px] border border-white rounded-full px-8 py-2 text-sm text-white font-bold" />
);

export const SecondaryButton = ({ title = "Join us now" }: Partial<ButtonProps>) => (
  <BaseButton title={title} className="w-[220px] border-2 border-white rounded-full bg-white px-4 py-2 text-sm text-cacdRed font-bold" />
);

export const PrimaryOutline = ({ title = "Join us now" }: Partial<ButtonProps>) => (
    <BaseButton title={title}  className="border-2 border-cacdRed rounded-full px-8 py-2 text-sm text-cacdRed font-bold" />
  );
  
