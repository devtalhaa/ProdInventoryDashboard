import React from 'react';

function Dialog({ isOpen, message, type, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p className="dialog-message">{message}</p>
        <div className="dialog-buttons">
          {type === 'confirm' ? (
            <>
              <button className="dialog-btn cancel" onClick={onClose}>Cancel</button>
              <button className="dialog-btn delete" onClick={onConfirm}>Delete</button>
            </>
          ) : (
            <button className="dialog-btn ok" onClick={onClose}>OK</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
