import React, { useEffect, useRef, useState } from "react";
import { Grid, Box } from "@chakra-ui/react";
import { useWindowSize } from "./WindowSize";

const useDrag = (
  orientation,
  containerRef,
  paneRef,
  props,
  sizeWin,
  handleSize = 20
) => {
  const isHorizontal = orientations[orientation] === orientations.horizontal;
  const isVertical = orientations[orientation] === orientations.vertical;

  const [paneSize, setPaneSize] = useState(0);
  const dragPos = useRef(null);
  const containerSize = useRef({current: null});

  const getEventPos = (e) => (isHorizontal ? e.clientX : e.clientY);
  const getRefSize = (ref) =>
    isHorizontal ? ref.current.clientWidth : ref.current.clientHeight;

  const onMouseDown = (e) => {
    dragPos.current = getEventPos(e);
    containerSize.current = getRefSize(containerRef);
  };

  const onMouseMove = (e) => {
    if (!dragPos.current) {
      return;
    }

    const pos = getEventPos(e);

    const size = paneSize || getRefSize(paneRef);

    const minPaneSize = 0;
    const maxSize  =Number(containerSize.current) - Number(handleSize);
    const newPaneSize = Math.min(
      maxSize,
      Math.max(minPaneSize, size + pos - dragPos.current)
    );

    dragPos.current = pos;

    if (props.splittype === "1" && paneSize > sizeWin.width * 0.8) {
      setPaneSize(sizeWin.width * 0.8);
    } else if (props.splittype === "1" && paneSize < sizeWin.width * 0.4) {
      setPaneSize(sizeWin.width * 0.4);
    } else if (props.splittype === "2" && paneSize > sizeWin.height * 0.8) {
      setPaneSize(sizeWin.height * 0.8);
      props.setheight(sizeWin.height * 0.7, sizeWin.height * 0.1);
    } else if (props.splittype === "2" && paneSize < sizeWin.height * 0.2) {
      setPaneSize(sizeWin.height * 0.2);
      props.setheight(sizeWin.height * 0.1, sizeWin.height * 0.7);
    } else {
      if (props.splittype === "2") {
        props.setheight(
          newPaneSize - sizeWin.height * 0.1,
          sizeWin.height - (newPaneSize + sizeWin.height * 0.1)
        );
      }
      setPaneSize(newPaneSize);

      // props.setheight(sizeWin.height * 0.2, sizeWin.height * 0.8)
    }
  };

  const onMouseUp = (e) => {
    dragPos.current = null;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  // const [gridProp, setGridProp] = useState(0);
  // useEffect(() => {
  const showInitialSize = paneSize === 0;
  const paneGridSize = showInitialSize
    ? props.splittype === "1"
      ? "80%"
      : `${sizeWin.height / 2}px`
    : `${paneSize}px`;
  const gridTemplateProp = `${paneGridSize} ${handleSize}px 1fr`;
  const gridProp = isHorizontal
    ? {
        gridTemplateColumns: gridTemplateProp,
      }
    : { gridTemplateRows: gridTemplateProp };
  if (props.splittype === "2" && showInitialSize) {
    props.setheight(
      sizeWin.height / 2 - sizeWin.height * 0.1,
      sizeWin.height / 2 - sizeWin.height * 0.1
    );
  }
  // setGridProp(gridProp);
  // }, [paneSize, initialPaneSize, handleSize, isHorizontal]);

  return { isHorizontal, isVertical, onMouseDown, ...gridProp };
};

const orientations = {
  horizontal: "horizontal",
  vertical: "vertical",
};

const SplitPane = ({ orientation, children, ...props }) => {
  const containerRef = useRef();
  const leftPaneRef = useRef() ;
  const sizeWin = useWindowSize();
  var {
    isHorizontal,
    isVertical,
    onMouseDown,
    gridTemplateColumns,
    gridTemplateRows,
  } = useDrag(orientation, containerRef, leftPaneRef, props, sizeWin);

  const containerStyle = {
    height: "100%",
    overflow: "hidden",
    display: "grid",
  };

  const handleStyle = {
    cursor: isHorizontal ? "col-resize" : isVertical ? "row-resize" : "",
    userSelect: "none",
  };

  let pane1 = children ? children[0] : null;
  let handle = children && children?.length === 3 ? children[1] : null;
  let pane2 = handle ? children[2] : children[1];

  return (
    <Grid
      ref={containerRef}
      {...props}
      style={{ ...containerStyle, gridTemplateColumns, gridTemplateRows }}
    >
      <Grid ref={leftPaneRef}>
        <Box>{pane1}</Box>
      </Grid>
      <Grid
        className="disable-select"
        style={handleStyle}
        onMouseDown={onMouseDown}
      >
        {handle}
      </Grid>
      <Grid>
        <Box>{pane2}</Box>
      </Grid>
    </Grid>
  );
};

export const DragHandle = ({ children, ...props }) => {
  return (
    <Grid style={{ width: "100%", height: "100%" }} {...props}>
      {children}
    </Grid>
  );
};

export default SplitPane;
