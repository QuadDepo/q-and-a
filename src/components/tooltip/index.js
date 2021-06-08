import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TooltipContent = styled.div`
  position: relative;
`;

const TooltipInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  top: -7px;
  z-index: 2;
  height: 100%;
  max-height: 50px;
  background: #b8b8b8;
  padding: 0 16px;
  border-radius: 8px;
`;

const TooltipArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: -10px;
  z-index: -1;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background: #b8b8b8;
`;

function Tooltip({ title, position = "top", children }) {
  const tooltipNode = useRef();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Add event when mounted
    document.addEventListener("mousedown", handleClick);

    // Remove event when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if (tooltipNode?.current?.contains(target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <TooltipWrapper>
      {isOpen && (
        <TooltipInner ref={tooltipNode} position={position}>
          {title}
          <TooltipArrow />
        </TooltipInner>
      )}
      <TooltipContent onClick={() => setOpen(!isOpen)}>
        {children}
      </TooltipContent>
    </TooltipWrapper>
  );
}

export default Tooltip;
