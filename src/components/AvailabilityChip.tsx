import React from "react";

type Props = {
  day: string;
  hour: number;
  minute: number;
  onDelete?: () => void;
};

export const AvailabilityChip: React.FC<Props> = ({
  day,
  hour,
  minute,
  onDelete,
}) => {
  

  return (
    <div className="chip">
      <span>
        {day} à {hour}h{minute}
      </span>

      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          ✕
        </button>
      )}
    </div>
  );
};