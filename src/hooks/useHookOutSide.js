import { useEffect, useRef, useState } from "react";

export const useHookOutSide = () => {
  const [isShow, setShow] = useState(false);

  const nodeRef = useRef();
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    isShow,
    setShow,
    nodeRef,
  };
};
