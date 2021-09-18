// import { Children } from "react";
import { useEffect, useRef } from "react";

const Accordion = (props) => {
  const { openType, children } = props;

  const accordionRef = useRef(null);

  useEffect(() => {
    // binds the events
    accordionRef.current
      .querySelectorAll(".panel .panel-title")
      .forEach((panel) => {
        panel.addEventListener("click", () => {
          if (openType === "controlled") {
            //autoclose any open panels
            accordionRef.current
              .querySelectorAll(".panel .panel-title")
              .forEach((currentpanel) => {
                currentpanel.classList = "panel-title";
              });
          }
          panel.classList.toggle("open");
        });
      });

    // auto open the first panel if the type is controlled
    if (openType === "controlled") {
      accordionRef.current
        .querySelector(".panel .panel-title")
        .classList.toggle("open");
    }
  }, [openType]);

  return (
    <div className="accordion" ref={accordionRef}>
      {children}
    </div>
  );
};
export default Accordion;
