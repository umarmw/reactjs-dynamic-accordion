import "./styles.css";
import AccordionPanel from "./AccordionPanel";
import Audio from "./Audio";
import Accordion from "./Accordion";
import AccordionDeepLink from "./AccordionDeepLink";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Controlled Accordion Example</h2>
      <Accordion openType="controlled" auid="a001">
        <AccordionPanel title="First">
          <h1>My content </h1>
          <Audio title="My title" track="single album" />
        </AccordionPanel>

        <AccordionPanel title="Second">
          <h2>My subcontent </h2>
          <Audio title="My title" track="single album" />
        </AccordionPanel>
      </Accordion>

      <h2>Simple Accordion Example</h2>
      <Accordion openType="simple" auid="a002">
        <AccordionPanel title="First">
          <h1>My content </h1>
          <Audio title="My title" track="single album" />
        </AccordionPanel>

        <AccordionPanel title="Second">
          <h2>My subcontent </h2>
          <Audio title="My title" track="single album" />
        </AccordionPanel>

        <AccordionPanel title="Third">
          <h2>My third subcontent </h2>
          <Audio title="My title 2021" track="Dual album" />
        </AccordionPanel>
      </Accordion>

      <h2>DeepLinks</h2>
      <AccordionDeepLink label="Jump" auid="a002" panelId="3" />
    </div>
  );
}
