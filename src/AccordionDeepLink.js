import { useRef } from "react";

const AccordionDeepLink = (props) => {
  const { auid, panelId, label } = props;
  const accordionLink = useRef(null);

  const goToAccordionPanel = (e) => {
    const accordionId = e.target.getAttribute("data-auid");
    const panelId = parseInt(e.target.getAttribute("data-panel-id"), 10) - 1;
    // code to open automatically a panel via click simulation
    const panelTarget = document
      .getElementById(accordionId)
      .children[panelId].querySelector(".panel-title");
    panelTarget.click();
  };

  return (
    <button
      data-auid={auid}
      data-panel-id={panelId}
      onClick={goToAccordionPanel}
      ref={accordionLink}
    >
      {label}
    </button>
  );
};
export default AccordionDeepLink;
