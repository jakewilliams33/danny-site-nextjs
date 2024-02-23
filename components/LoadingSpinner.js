export const LoadingSpinner = ({
  styleParams = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10000,
  },
  size = 50,
}) => {
  return (
    <div style={styleParams}>
      <svg
        className="loading-spinner"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="rgb(255, 132, 0)" />
            <stop
              offset="100%"
              stopOpacity="0.5"
              stopColor="rgb(255, 132, 0)"
            />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="rgb(255, 132, 0)" />
            <stop
              offset="100%"
              stopOpacity="0.5"
              stopColor="rgb(255, 132, 0)"
            />
          </linearGradient>
        </defs>

        <g strokeWidth="8">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />

          <path
            stroke="rgb(255, 132, 0)"
            strokeLinecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
        </g>
      </svg>
    </div>
  );
};
