"use client";
import { useEffect, useState } from "react";

export default function OrderDate({ date }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date(date).toLocaleString());
  }, [date]);

  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
      {formattedDate}
    </td>
  );
}
