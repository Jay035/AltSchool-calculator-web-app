import BackspaceButton from "./BackspaceButton";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";
import NegativeButton from "./NegativeButton";
import Button from "./Button";

export default function Keypad() {
  return (
    <div className="keypad">
      <div className="col">
        <BackspaceButton />
        <Button label={7} className="number" />
        <Button label={4} className="number" />
        <Button label={1} className="number" />
        <NegativeButton />
      </div>
      <div className="col">
        <ClearButton />
        <Button label={8} className="number" />
        <Button label={5} className="number" />
        <Button label={2} className="number" />
        <Button label={0} className="number" />
      </div>
      <div className="col">
        <Button label=" % " className="operation" />
        <Button label={9} className="number" />
        <Button label={6} className="number" />
        <Button label={3} className="number" />
        <Button label="." className="number" />
      </div>
      <div className="col">
        <Button label=" / " className="operation" />
        <Button label=" * " className="operation" />
        <Button label=" - " className="operation" />
        <Button label=" + " className="operation" />
        <EqualButton />
      </div>
    </div>
  );
}
