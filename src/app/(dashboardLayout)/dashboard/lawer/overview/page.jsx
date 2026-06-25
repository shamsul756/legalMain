import { Card } from "@heroui/react"
import { FaDollarSign, FaTicketAlt } from "react-icons/fa"
import { FaCalendarDays } from "react-icons/fa6"

const OverViewPage=()=>{
    
return(
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Spent</span>
                            <h2 className="text-3xl font-extrabold text-black">
                                $298.00
                            </h2>
                        </div>
                        <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20">
                            <FaDollarSign size={24} />
                        </div>
                    </div>
                </Card>

                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Tickets Booked</span>
                            <h2 className="text-3xl font-extrabold text-black">
                                4
                            </h2>
                        </div>
                        <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20">
                            <FaTicketAlt size={24} />
                        </div>
                    </div>
                </Card>

                <Card className="glass border-white/5" radius="lg">
                    <div className="p-6 flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Upcoming Events</span>
                            <h2 className="text-3xl font-extrabold text-black">
                                2
                            </h2>
                        </div>
                        <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
                            <FaCalendarDays size={24} />
                        </div>
                    </div>
                </Card>
            </div>

)
}
export default OverViewPage