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
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");
  

  return (
    <div className="chip">
      <span>
        {day} à {formattedHour}h{formattedMinute}
      </span>

      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          ✕
        </button>
      )}
    </div>
  );
};