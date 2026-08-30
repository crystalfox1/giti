import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const buttonText = isOn ? "ON" : "OFF";

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {buttonText}
      </button>
    </div>
  );
}
