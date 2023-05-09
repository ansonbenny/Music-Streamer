import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const useCarousel = (elements) => {
  const { expand } = useSelector((state) => state.additional);

  const [settings, _setSettings] = useState({
    isDragStart: false,
    isDragging: false,
    prevScrollLeft: 0,
    prevPageX: 0,
    positionDiff: 0,
  });

  const ref = useRef({
    ...elements,
    settings,
  });

  const setSettings = (data) => {
    ref.current["settings"] = data;
    _setSettings(data);
  };

  const autoSlide = useCallback(() => {
    if (ref?.current?.["slide"]?.scrollLeft) {
      const { settings } = ref.current;

      let cardWidth = parseFloat(
        ref.current["card"].getBoundingClientRect()?.width || 0
      );

      cardWidth = cardWidth.toFixed(2);
      cardWidth = parseFloat(cardWidth) + 16;

      let round = Math.ceil(ref.current["slide"].scrollLeft / cardWidth);
      let scroll = cardWidth * round + 0.5;

      if (ref?.current?.["slide"]?.scrollLeft >= settings?.prevScrollLeft) {
        ref.current["slide"].scrollLeft = scroll;
      } else {
        ref.current["slide"].scrollLeft = scroll - cardWidth;
      }
    }
  }, [expand]);

  // for dragging
  useEffect(() => {
    if (ref?.current?.["slide"]) {
      // for when expand

      autoSlide();

      // for dragging

      const dragStart = (e) => {
        const { settings } = ref.current;
        setSettings({
          ...settings,
          isDragStart: true,
          prevPageX: e.pageX || e.touches[0].pageX,
          prevScrollLeft: ref?.current?.["slide"]?.scrollLeft || 0,
        });
      };

      const dragging = (e) => {
        const { settings } = ref.current;
        if (settings?.isDragStart && ref?.current?.["slide"]) {
          var positionDiff =
            (e.pageX || e.touches[0].pageX) - settings?.prevPageX;
          setSettings({ ...settings, isDragging: true, positionDiff });
          ref.current["slide"].scrollLeft =
            settings?.prevScrollLeft - positionDiff;

          if (e?.touches?.[0]) {
            // for auto adujust touch devices
            autoSlide();
          }
        }
      };

      const dragStop = (e) => {
        const { settings } = ref.current;
        if (!e?.touches && settings?.isDragging && settings?.isDragStart) {
          // for auto adujust mouse devices
          autoSlide();
        }
        setSettings({
          ...settings,
          isDragStart: false,
          isDragging: false,
        });
      };

      ref?.current?.["slide"]?.addEventListener("mousedown", dragStart);
      ref?.current?.["slide"]?.addEventListener("touchstart", dragStart);

      ref?.current?.["slide"]?.addEventListener("mousemove", dragging);
      ref?.current?.["slide"]?.addEventListener("touchmove", dragging);

      ref?.current?.["slide"]?.addEventListener("mouseup", dragStop);
      ref?.current?.["slide"]?.addEventListener("mouseout", dragStop);
      ref?.current?.["slide"]?.addEventListener("touchend", dragStop);

      // for resize
      window.addEventListener("resize", autoSlide);

      return () => {
        // cleanup
        // for dragging
        ref?.current?.["slide"]?.removeEventListener("mousedown", dragStart);
        ref?.current?.["slide"]?.removeEventListener("touchstart", dragStart);

        ref?.current?.["slide"]?.removeEventListener("mousemove", dragging);
        ref?.current?.["slide"]?.removeEventListener("touchmove", dragging);

        ref?.current?.["slide"]?.removeEventListener("mouseup", dragStop);
        ref?.current?.["slide"]?.removeEventListener("mouseout", dragStop);
        ref?.current?.["slide"]?.removeEventListener("touchend", dragStop);

        // for resize
        window.removeEventListener("resize", autoSlide);
      };
    }
  }, [autoSlide]);

  return [ref, settings];
};

export default useCarousel;
