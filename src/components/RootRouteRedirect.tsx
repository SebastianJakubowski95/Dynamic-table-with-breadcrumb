import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const RootRouteRedirect: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default RootRouteRedirect;
