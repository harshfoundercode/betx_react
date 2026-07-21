import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

function ChickenRoadLayout({ component }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      {loading ? <LoadingPage /> : component}
    </div>
  );
}

export default ChickenRoadLayout;