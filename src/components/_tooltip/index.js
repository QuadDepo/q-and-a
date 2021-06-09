import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TooltipContent = styled.div`
  position: relative;
  cursor: pointer;
`;

const TooltipInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  top: ${(props) => `-${props.height}px`};
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
  const tooltipArrow = useRef();
  const tooltipContent = useRef();
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Add event when mounted
    document.addEventListener("mousedown", handleClick);

    // Remove event when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const tooltip = tooltipNode?.current;
    const arrow = tooltipArrow?.current;

    setHeight(tooltip.offsetHeight + arrow.offsetHeight);
  }, [isOpen]);

  const handleClick = ({ target }) => {
    if (
      tooltipNode?.current?.contains(target) ||
      tooltipContent?.current?.contains(target)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <TooltipWrapper>
      {isOpen && (
        <TooltipInner height={height} ref={tooltipNode} position={position}>
          {title}
          <TooltipArrow ref={tooltipArrow} />
        </TooltipInner>
      )}
      <TooltipContent ref={tooltipContent} onClick={() => setOpen(true)}>
        {children}
      </TooltipContent>
    </TooltipWrapper>
  );
}

export default Tooltip;
