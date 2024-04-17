export default function Button({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <div className={className + " cursor-pointer dark-light-mode hover:bg-yellow-600 hover:text-white hover:border-yellow-600 mt-6 py-3 px-6 border-2 rounded-full w-fit"}>
      <button>{children}</button>
    </div>
  );
}
