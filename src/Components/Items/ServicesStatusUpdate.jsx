"use client";

import { updateServiceStatus } from "@/actions/server/updateServiceStatus";
import Swal from "sweetalert2";

const ServicesStatusUpdate = ({ item }) => {
  const handleStatusChange = async (id, newStatus) => {
  if (newStatus === "pending") return;

  const result = await Swal.fire({
    title: "Are you sure?",
    text: `Do you want to ${newStatus} this service?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#dc2626",
    confirmButtonText: "Yes, confirm",
  });

  if (!result.isConfirmed) return;

  
  await updateServiceStatus(id, newStatus);

  Swal.fire({
    title: "Success!",
    text: `Service has been ${newStatus}.`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
};


  return (
    <div>
      {item.status === "pending" ? (
        <span
          className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest
            ${
              item.status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {item.status}
        </span>
      ) : (
        <select
          defaultValue={item.status}
          onChange={(e) => handleStatusChange(item._id, e.target.value)}
          className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest 
                     border border-amber-300 bg-amber-50 text-amber-700
                     focus:outline-none cursor-pointer"
        >
          <option value="pending">Pending</option>
          <option value="approved">Approve</option>
          <option value="completed">Completed</option>
        </select>
      )}
    </div>
  );
};

export default ServicesStatusUpdate;
