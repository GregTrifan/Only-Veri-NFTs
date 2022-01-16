import { Loader } from "..";

interface Props {
  children: string | JSX.Element;
  width?: number;
  loading: boolean;
  [x: string]: any;
}

export default function Button(props: Props) {
  const { children, width, loading, ...rest } = props;

  return (
    <button
      type="button"
      className={`flex transition items-center shadow-lg justify-center px-4 py-2 font-semibold border border-black hover:border-transparent hover:text-white hover:bg-black rounded-full ${
        width && `w-${width}`
      } ${loading && "cursor-not-allowed opacity-50"}`}
      disabled={loading}
      {...rest}
    >
      {children} {loading && <Loader size={5} />}
    </button>
  );
}
