import { cn } from "@/libs/cn";
import { MoonLoader } from "react-spinners";

type IButtonProps = {
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = (
  { className, loading, children, disabled },
  props
) => {
  return (
    <button
      {...props}
      className={cn(
        `bg-sky-500 px-4 py-2 rounded font-medium my-2 enabled:hover:bg-sky-600 
            flex items-center justify-center
            
            ${
              disabled &&
              "hover:shadow-lg transition duration-200 opacity-50 cursor-not-allowed"
            }
            `,
        className
      )}
    >
      {loading && (
        <span className=" w-5 h-5 mr-2">
          <MoonLoader
            color="#fff"
            size={15}
            speedMultiplier={1.5}
            loading={loading}
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
