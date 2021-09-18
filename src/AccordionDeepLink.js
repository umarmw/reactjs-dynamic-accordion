const AccordionDeepLink = (props) => {
  const { auid, panelId, label } = props;

  const goToAccordionPanel = (e) => {
    console.log(e.target);
    // code to write to open
  };

  return (
    <button
      data-auid={auid}
      data-panel-id={panelId}
      onClick={goToAccordionPanel}
    >
      {label}
    </button>
  );
};
export default AccordionDeepLink;
