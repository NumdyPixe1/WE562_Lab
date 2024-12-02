import { useState } from "react";

function ControlledCountryForm() {
  const [country, setCountry] =
    useState("uk"); /*ตั้งค่าเริ่มต้น ถ้าค่า state เป็น uk 
    select จะเปลี่ยนเป็น United kingdom*/
  return (
    <form>
      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">United States</option>
          <option value="th">Thailand</option>
          <option value="vn">Vietnam</option>
          <option value="uk">United Kingdom</option>
        </select>
      </label>
    </form>
  );
}

export default ControlledCountryForm;
