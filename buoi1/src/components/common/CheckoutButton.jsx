import React from "react";
import { useMemo } from "react";

function CheckoutButton({ onCheckout }) {
    console.log("Nút thanh toán vừa bị render lại");


    return (
        <button
            onClick={onCheckout}
            className="block mx-auto mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-[0.98]"
        >
            Thanh toán
        </button>
    );
}
export default  React.memo(CheckoutButton);
