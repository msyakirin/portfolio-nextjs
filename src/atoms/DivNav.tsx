export default function DivNav({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={className + " cursor-pointer  hover:border-b-2 border-green-600"}>{children}</div>;
}
