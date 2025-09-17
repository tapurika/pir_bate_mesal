import { useState, useEffect } from "react";

function CopyTextHook() {
  const [isCopy, setIsCopy] = useState(false);

  const copyText: (text: string) => void = (text: string) => {
    if (!isCopy) {
      setIsCopy(true);
      navigator.clipboard.writeText(text);
    }
  };

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
    }
  }, [isCopy]);

  return { isCopy, copyText };
}

export default CopyTextHook;
