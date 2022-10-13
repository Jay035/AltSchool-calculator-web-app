export default function Display({currentOperand, previousOperand, operation, formatOperand}) {

  return (
    <div className="display">
      <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
      <div className="current-operand">{formatOperand(currentOperand)}</div>
    </div>
  );
}
