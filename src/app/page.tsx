import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-400 justify-center items-center gap-20 text-5xl font-semibold">
      <Link href="/dashboardAdmin" >Route 1 : http://localhost:3000/dashboardAdmin</Link>
      <Link href="/dashboardUser" >Route 2 : http://localhost:3000/dashboardUser</Link>
    </div>
  );
}
