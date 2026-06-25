"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
} from "@heroui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const ManageLegalRecordsClient = ({ records: initialRecords = [] }) => {
  const [records, setRecords] = useState(initialRecords || []);
  const [loading, setLoading] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleAction = async (id, action) => {
    try {
      setLoading(true);
      setSelectedAction(id);

      // API call করতে পারেন এখানে
      // const response = await fetch(`/api/records/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: action })
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Update state
      setRecords((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: action } : item
        )
      );

      // Success alert
      alert(`Hiring request ${action} successfully!`);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status. Please try again.");
    } finally {
      setLoading(false);
      setSelectedAction(null);
    }
  };

  // Sample data যদি কোনো data না থাকে
  const displayRecords =
    records && Array.isArray(records) && records.length > 0 ? records : [];

  // Status badge color logic
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "bg-green-500/10 text-green-400";
      case "rejected":
        return "bg-red-500/10 text-red-400";
      case "pending":
      default:
        return "bg-yellow-500/10 text-yellow-400";
    }
  };

  // Status text
  const getStatusText = (status) => {
    return status?.toLowerCase() || "pending";
  };

  return (
    <div className="mt-6 w-full px-4 sm:px-0">
      <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl p-4 sm:p-6 rounded-2xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Manage Legal Records
          </h2>
          <p className="text-slate-400 text-sm">
            {displayRecords.length} hiring request(s) found
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          {displayRecords.length > 0 ? (
            <Table
              aria-label="Lawyer Manage Hiring History Table"
              className="w-full"
              color="default"
              shadow="none"
            >
              <TableHeader className="bg-slate-800/50">
                <TableColumn className="text-white font-bold">
                  CLIENT NAME
                </TableColumn>
                <TableColumn className="text-white font-bold">
                  REQUEST DATE
                </TableColumn>
                <TableColumn className="text-white font-bold text-right">
                  CONSULTATION FEE
                </TableColumn>
                <TableColumn className="text-white font-bold">
                  STATUS
                </TableColumn>
                <TableColumn className="text-white font-bold">
                  ACTIONS
                </TableColumn>
              </TableHeader>

              <TableBody
                emptyContent="No records found"
                isLoading={loading}
                loadingContent={<Spinner label="Loading..." />}
              >
                {displayRecords.map((item) => (
                  <TableRow key={item._id || `record-${Math.random()}`}>
                    {/* Client Name */}
                    <TableCell className="font-bold text-white">
                      {item.clientName || "Unknown Client"}
                    </TableCell>

                    {/* Request Date */}
                    <TableCell className="text-slate-300">
                      {item.date ||
                        item.requestDate ||
                        new Date().toLocaleDateString() ||
                        "N/A"}
                    </TableCell>

                    {/* Consultation Fee */}
                    <TableCell className="font-semibold text-emerald-400 text-right">
                      $
                      {typeof item.fee === "number"
                        ? item.fee.toFixed(2)
                        : "0.00"}
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Chip
                        size="sm"
                        variant="flat"
                        className={`font-bold uppercase text-[11px] ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {getStatusText(item.status)}
                      </Chip>
                    </TableCell>

                    {/* Actions */}
                    <TableCell>
                      <div className="flex gap-2 items-center">
                        {item.status === "pending" || !item.status ? (
                          <>
                            <Button
                              isIconOnly
                              size="sm"
                              color="success"
                              variant="flat"
                              onPress={() =>
                                handleAction(item._id, "accepted")
                              }
                              isLoading={
                                loading && selectedAction === item._id
                              }
                              disabled={loading}
                              className="hover:bg-green-600/20"
                              title="Accept request"
                            >
                              <FaCheck className="text-sm" />
                            </Button>

                            <Button
                              isIconOnly
                              size="sm"
                              color="danger"
                              variant="flat"
                              onPress={() =>
                                handleAction(item._id, "rejected")
                              }
                              isLoading={
                                loading && selectedAction === item._id
                              }
                              disabled={loading}
                              className="hover:bg-red-600/20"
                              title="Reject request"
                            >
                              <FaTimes className="text-sm" />
                            </Button>
                          </>
                        ) : (
                          <span className="text-xs text-slate-400 font-medium px-3 py-1 rounded-full bg-slate-800/50 capitalize">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-slate-500 mb-4">
                <svg
                  className="w-16 h-16 mx-auto opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-slate-400 text-lg font-medium">
                No hiring requests found
              </p>
              <p className="text-slate-500 text-sm mt-2">
                New requests will appear here
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ManageLegalRecordsClient;