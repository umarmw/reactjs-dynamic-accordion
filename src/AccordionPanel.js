const AccordionPanel = (props) => {
  const { title, children } = props;

  return (
    <div className="panel">
      <div className="panel-title">
        {title} <span className="arrow"></span>
      </div>
      <div className="panel-content"> {children}</div>
    </div>
  );
};
export default AccordionPanel;
