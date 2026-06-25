"use client"
import Link from "next/link";
import {
  Card,
  Table,
  TableContent,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button
} from "@heroui/react";

const TicketsTable = ({ tickets }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const getStatusIcon = (status) => {
    return status === "success" ? "✓" : "✕";
  };

  const getStatusGradient = (status) => {
    if (status === "success") {
      return "bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-500/30";
    }
    return "bg-gradient-to-r from-rose-500/10 to-rose-600/10 border-rose-500/30";
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Tickets</h2>
        <p className="text-slate-400">Manage and view all your event tickets in one place</p>
      </div>

      <Card className="border border-white/10 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden">
        {/* Premium Header */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none rounded-3xl" />
        
        <div className="relative p-8">
          {tickets.length === 0 ? (
            <div className="py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 border border-white/10 mb-4">
                <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium mb-1">No tickets yet</p>
              <p className="text-slate-500 text-sm">Explore events and book your first ticket</p>
              <Button
                as={Link}
                href="/events"
                color="primary"
                variant="flat"
                className="mt-6"
              >
                Browse Events
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest text-slate-400">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-white/5">
                  {tickets.map((ticket) => (
                    <tr
                      key={ticket._id}
                      className="group hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    >
                      {/* Event Name */}
                      <td className="px-6 py-5">
                        <Link
                          href={`/events/${ticket.eventId}`}
                          className="flex items-center gap-3 group/link"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover/link:border-white/20 transition-colors">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 0l3 3m-3-3L9 3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-white group-hover/link:text-blue-400 transition-colors line-clamp-1">
                              {ticket.eventTitle}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">ID: {ticket._id.slice(0, 8)}</p>
                          </div>
                        </Link>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-slate-300 font-medium">{formatDate(ticket.bookingDate)}</span>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-white/10">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m-4 3.5V9m4 11v2m-4-3.5V15M9 20h6a2 2 0 002-2V4a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span className="text-slate-200 font-semibold text-sm">
                            {ticket.quantity} {ticket.quantity === 1 ? "ticket" : "tickets"}
                          </span>
                        </div>
                      </td>

                      {/* Total Paid */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            ${Number(ticket.amount)?.toFixed(2)}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border ${getStatusGradient(ticket.paymentStatus)}`}>
                          <span className={`text-lg font-bold ${ticket.paymentStatus === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                            {getStatusIcon(ticket.paymentStatus)}
                          </span>
                          <span className={`text-xs font-bold uppercase tracking-wider ${ticket.paymentStatus === "success" ? "text-emerald-300" : "text-rose-300"}`}>
                            {ticket.paymentStatus}
                          </span>
                        </div>
                      </td>

                      {/* Action */}
                      <td className="px-6 py-5 text-right">
                        <Button
                          isIconOnly
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10 hover:bg-white/20 border border-white/20"
                          as={Link}
                          href={`/tickets/${ticket._id}`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Card>

      {/* Footer Stats - Optional */}
      {tickets.length > 0 && (
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur">
            <p className="text-slate-400 text-sm font-medium mb-1">Total Tickets</p>
            <p className="text-2xl font-bold text-white">{tickets.reduce((sum, t) => sum + t.quantity, 0)}</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur">
            <p className="text-slate-400 text-sm font-medium mb-1">Total Spent</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              ${tickets.reduce((sum, t) => sum + Number(t.amount), 0).toFixed(2)}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur">
            <p className="text-slate-400 text-sm font-medium mb-1">Confirmed</p>
            <p className="text-2xl font-bold text-emerald-400">
              {tickets.filter(t => t.paymentStatus === "success").length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;