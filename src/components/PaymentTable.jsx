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

const PaymentsTable = ({ payments }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const getTotalAmount = () => {
    return payments.reduce((sum, p) => sum + Number(p.amount), 0).toFixed(2);
  };

  const getSuccessfulPayments = () => {
    return payments.filter(p => p.paymentStatus === "succeeded" || p.paymentStatus === "success").length;
  };

  const getStatusIcon = (status) => {
    if (status === "failed") {
      return (
        <svg className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    );
  };

  const getStatusGradient = (status) => {
    if (status === "failed") {
      return "bg-gradient-to-r from-rose-500/10 to-rose-600/10 border-rose-500/30";
    }
    return "bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border-emerald-500/30";
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Payment History</h2>
        <p className="text-slate-400">Track all your transactions and receipts</p>
      </div>

      <Card className="border border-white/10 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden">
        {/* Premium Header Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative p-8">
          {payments.length === 0 ? (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 border border-white/10 mb-5">
                <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium mb-1 text-lg">No transactions yet</p>
              <p className="text-slate-500 text-sm">Your payment history will appear here once you make your first purchase</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                        Transaction
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                        Date & Time
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
                    {payments.map((payment) => (
                      <tr
                        key={payment._id}
                        className="group hover:bg-white/5 transition-all duration-300"
                      >
                        {/* Transaction ID */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-indigo-300 truncate text-sm" title={payment.transactionId}>
                                {payment.transactionId.slice(0, 16)}...
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">ID: {payment._id.slice(0, 8)}</p>
                            </div>
                          </div>
                        </td>

                        {/* Amount */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-1">
                            <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                              ${Number(payment.amount)?.toFixed(2)}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">USD</span>
                          </div>
                        </td>

                        {/* Date & Time */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-300 font-medium text-sm">{formatDate(payment?.paidAt)}</span>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-5">
                          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border ${getStatusGradient(payment.paymentStatus)}`}>
                            {getStatusIcon(payment.paymentStatus)}
                            <span className={`text-xs font-bold uppercase tracking-wider ${payment.paymentStatus === "failed" ? "text-rose-300" : "text-emerald-300"}`}>
                              {payment.paymentStatus || "succeeded"}
                            </span>
                          </div>
                        </td>

                        {/* Action */}
                        <td className="px-6 py-5 text-right">
                          <button
                            onClick={() => copyToClipboard(payment.transactionId)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                            title="Copy transaction ID"
                          >
                            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Stats */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur hover:border-white/20 transition-colors">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Transactions</p>
                    <p className="text-3xl font-bold text-white">{payments.length}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur hover:border-white/20 transition-colors">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Spent</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      ${getTotalAmount()}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur hover:border-white/20 transition-colors">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Successful</p>
                    <p className="text-3xl font-bold text-emerald-400">{getSuccessfulPayments()}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur hover:border-white/20 transition-colors">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Failed</p>
                    <p className="text-3xl font-bold text-rose-400">{payments.length - getSuccessfulPayments()}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PaymentsTable;