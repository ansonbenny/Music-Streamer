export const dragStart = (e, ref, settings, setSettings) => {
  setSettings({
    ...settings,
    isDragStart: true,
    prevPageX: e.pageX || e.touches[0].pageX,
    prevScrollLeft: ref?.current?.["slide"]?.scrollLeft || 0,
  });
};

export const dragging = (e, ref, settings, setSettings) => {
  if (settings?.isDragStart && ref?.current?.["slide"]) {
    setSettings({ ...settings, isDragging: true });
    var positionDiff = (e.pageX || e.touches[0].pageX) - settings?.prevPageX;
    ref.current["slide"].scrollLeft = settings?.prevScrollLeft - positionDiff;
  }
};

export const dragStop = (ref, settings, setSettings) => {
  setSettings({
    ...settings,
    isDragStart: false,
    isDragging: false,
  });
};
