import { Search } from "lucide-react";

function MembersPortal() {
  return (
    <section id="members" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-800">
            Members
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 md:text-5xl">
            Member login and advocate directory
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            Add secure member login, profile management, membership renewal,
            circular downloads, event registration, and directory search.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/70">
          <div className="relative">
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none focus:border-red-800"
              placeholder="Search member name or enrollment number"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <button className="rounded-2xl bg-red-900 px-5 py-4 font-black text-white hover:bg-red-800">
              Search Directory
            </button>
            <button className="rounded-2xl border border-slate-300 bg-white px-5 py-4 font-black text-slate-950 hover:border-red-900">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MembersPortal;