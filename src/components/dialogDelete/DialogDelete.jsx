import React from "react";

const DialogDelete = ({ openDialogDelete, onOK, onCancel }) => {
  if (!openDialogDelete) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <div className="bg-seashell p-6 rounded-lg shadow-lg lg:w-96 md:w-48 ">
        <h2 className="text-xl font-semibold">Bạn có chắc chắn muốn xoá</h2>
        <div className="mt-6 flex justify-between">
          <button
            variant="outline"
            className="p-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            onClick={onOK}>
            OK
          </button>
          <button
            variant="outline"
            className="p-2 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogDelete;
