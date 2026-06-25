import { Card, Button } from "@heroui/react";
import { FaDollarSign, FaTicketAlt, FaCrown } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import PremiumButton from "@/components/PremiumButton";

const OverViewPage = () => {
  const isPremium = false; // database থেকে আনবে

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Total Spent */}
      <Card 
        className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50" 
        radius="lg"
        isPressable
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              Total Spent
            </span>
            <h2 className="text-4xl font-black text-white mt-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              $298.00
            </h2>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl border border-green-500/30 group transition-all duration-300 hover:from-green-500/30 hover:to-emerald-500/20 w-fit">
            <FaDollarSign className="text-green-400 group-hover:scale-110 transition-transform" size={24} />
          </div>
        </div>
      </Card>

      {/* lawyers Hired */}
      <Card 
        className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50" 
        radius="lg"
        isPressable
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              lawyers Hired
            </span>
            <h2 className="text-4xl font-black text-white mt-2 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              4
            </h2>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded-2xl border border-pink-500/30 group transition-all duration-300 hover:from-pink-500/30 hover:to-rose-500/20 w-fit">
            <FaTicketAlt className="text-pink-400 group-hover:scale-110 transition-transform" size={24} />
          </div>
        </div>
      </Card>

      {/* Active Cases */}
      <Card 
        className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50" 
        radius="lg"
        isPressable
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              Active Cases
            </span>
            <h2 className="text-4xl font-black text-white mt-2 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              2
            </h2>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-br from-indigo-500/20 to-blue-500/10 rounded-2xl border border-indigo-500/30 group transition-all duration-300 hover:from-indigo-500/30 hover:to-blue-500/20 w-fit">
            <FaCalendarDays className="text-indigo-400 group-hover:scale-110 transition-transform" size={24} />
          </div>
        </div>
      </Card>

      {/* Premium Card */}
      <Card
        className="col-span-1 md:col-span-2 xl:col-span-1 bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-slate-900 border border-amber-500/40 hover:border-amber-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/30 ring-1 ring-amber-400/20"
        radius="lg"
        isPressable
      >
        <div className="p-6 flex flex-col justify-between h-full min-h-[280px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-gradient-to-br from-amber-400/30 to-yellow-500/20 rounded-xl border border-amber-400/40">
                <FaCrown className="text-amber-300" size={20} />
              </div>
              <h3 className="font-black text-lg bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Premium Membership
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Unlock unlimited lawyer hiring, priority support, and premium legal services.
            </p>
          </div>

          <div className="mt-8">
            {isPremium ? (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/40 rounded-xl p-4 text-center ring-1 ring-green-400/20">
                <p className="text-green-300 font-bold text-sm tracking-wide">
                  ✓ Premium Active
                </p>
              </div>
            ) : (
              <PremiumButton />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OverViewPage;