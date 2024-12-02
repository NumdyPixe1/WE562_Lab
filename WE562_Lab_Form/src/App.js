import "./styles.css";
import ControlledCountryForm from "./components/ControlledCountryForm";
import ControlledEmailForm from "./components/ControlledEmailForm";
import MultiFieldForm from "./components/MultiFieldForm";
export default function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#77ed7b" }}>
        <h2>Country select dropdown</h2>
        <ControlledCountryForm />
      </div>
      <div style={{ backgroundColor: "#ed779c" }}>
        <h2>การจัดการ Validation</h2>
        <ControlledEmailForm />
      </div>
      <div style={{ backgroundColor: "#81b5fc" }}>
        <h2>ฟอร์มแบบหลายขั้นตอน (Multi-step Form)</h2>
        <MultiFieldForm />
      </div>
    </div>
  );
}
