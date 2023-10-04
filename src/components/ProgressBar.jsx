export const ProgressBar = ({ progress }) => {
  return (
    <div className="relative w-full h-1 mt-4 bg-white rounded bg-opacity-30 white ">
      <div
        className="absolute top-0 left-0 h-1 bg-white rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
