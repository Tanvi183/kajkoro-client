"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // In a real app, you would pass the admin token here
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact`);
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to load contact messages");
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, isRead: true } : msg
        )
      );
      toast.success("Message marked as read");
    } catch (error) {
      console.error("Error updating message:", error);
      toast.error("Failed to update message");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Contact Messages
        </h1>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No contact messages found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
              <thead className="bg-slate-50 text-xs uppercase text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-semibold">Name / Email</th>
                  <th className="px-6 py-4 font-semibold">Message</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {messages.map((msg) => (
                  <tr
                    key={msg.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-900/50 ${
                      !msg.isRead ? "bg-emerald-50/30 dark:bg-emerald-900/10" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {msg.name}
                      </div>
                      <div className="text-xs">{msg.email}</div>
                      {!msg.isRead && (
                        <span className="mt-1 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                          New
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="max-w-md whitespace-pre-wrap text-sm">
                        {msg.message}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {!msg.isRead ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => markAsRead(msg.id)}
                          className="h-8"
                        >
                          Mark as Read
                        </Button>
                      ) : (
                        <span className="text-sm text-slate-400">Read</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
