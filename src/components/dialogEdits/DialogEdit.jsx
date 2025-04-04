import React, { useState } from "react";

export const DialogEdit = ({ openDialogEdit, item, onOK, onCancel }) => {
  if (!openDialogEdit) return null;
  const [newValTitle, setNewValTitle] = useState("");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <div className="bg-seashell p-6 rounded-lg shadow-lg lg:w-96 md:w-48 ">
        <h2 className="text-xl font-semibold">Hãy sửa tên công việc</h2>
        <input
          type="text"
          className="mt-4 rounded-lg lg:w-full md:w-10/12 p-2 border-inherit font-light focus:border  focus:border-seashell focus:ring-0  focus:outline-none"
          defaultValue={item.title}
          onChange={(e) => setNewValTitle(e.target.value)}
        />
        <div className="mt-6 flex justify-between">
          <button
            disabled={newValTitle.length === 0 ? true : false}
            variant="outline"
            className={`p-2  rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ${
              newValTitle.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={onOK}>
            Lưu
          </button>
          <button
            variant="outline"
            className="p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            onClick={onCancel}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
