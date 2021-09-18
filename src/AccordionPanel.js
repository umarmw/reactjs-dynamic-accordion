const AccordionPanel = (props) => {
  const { title, children } = props;

  return (
    <div className="panel">
      <div className="panel-title">{title}</div>
      <div className="panel-content"> {children}</div>
    </div>
  );
};
export default AccordionPanel;
