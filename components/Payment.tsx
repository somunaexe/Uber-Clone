import React from "react";
import CustomButton from "./CustomButton";

const Payment = () => {
  const onPaymentSheet = async () => {};
  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={onPaymentSheet}
      />
    </>
  );
};

export default Payment;
