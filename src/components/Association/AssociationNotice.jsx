import { motion } from "framer-motion";
import FileNoticeIcon from "../FileNoticeIcon";

function AssociationNotice() {
  const notices = [
    "Annual General Body Meeting notification released",
    "New member enrollment and renewal forms available",
    "MBA Law Academy video sessions updated",
    "Useful legal resources and acts are available online",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"
    >
      <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-800">
              Association Notice Board
            </p>
            <h3 className="mt-2 text-2xl font-black">Latest Updates</h3>
          </div>
          <div className="rounded-2xl bg-amber-100 p-3 text-red-900">
            <FileNoticeIcon />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {notices.map((notice, index) => (
            <div
              key={notice}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-900 text-sm font-black text-white">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-slate-700">
                {notice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default AssociationNotice;
