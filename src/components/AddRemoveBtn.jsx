import React from "react";

export function AddRemoveBtn({
  isAdded,
  addItem,
  removeItem,
}) {
  return (
    <div className="add-remove-btn">
      {isAdded ? (
        <button className="remove-item-btn" onClick={removeItem}>
          Remove
        </button>
      ) : (
        <button className="add-item-btn" onClick={addItem}>
          Add
        </button>
      )}
    </div>
  );
}
