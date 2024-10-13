export default function Bottombar() {
  return (
    <div className="h-20 px-6">
      <div className="flex justify-between">
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
            />
          </svg>
          <p className="text-lg font-medium">Previous</p>
        </button>
        <button className="flex items-center">
          <p className="text-lg font-medium">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="rotate-180"
          >
            <path
              fill="currentColor"
              d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
