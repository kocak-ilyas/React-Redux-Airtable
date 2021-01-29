import React, { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import MaskInput from "react-maskinput";

export default function CreditCard() {
  return (
    <div>
      <MaskInput
        alwaysShowMask
        mask="0000-0000-0000-0000"
        size={20}
        maskChar="_"
      />
      <MaskInput alwaysShowMask mask="00/00" size={20} showMask maskChar="_" />
      <MaskInput
        alwaysShowMask
        mask={"+1 (000) 000 - 0000"}
        size={20}
        maskChar="_"
      />

      <form action="">
        <div>
          <label for="cc">Expiration Date</label>
          <input
            id="cc"
            type="text"
            placeholder="MM/YY"
            class="masked"
            pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
            data-valid-example="05/18"
          />
        </div>

        <div>
          <label for="czc">Canadian Zip Code</label>
          <input
            id="czc"
            placeholder="XXX XXX"
            pattern="\w\d\w \d\w\d"
            class="masked"
            data-charset="_X_ X_X"
            id="zipca"
            type="text"
            name="zipcodeca"
            title="6-character alphanumeric zip code in the format of A1A 1A1"
          />
        </div>
      </form>
    </div>
  );
}
