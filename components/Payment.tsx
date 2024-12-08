import CustomButton from "./CustomButton";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const Payment = () => {
  // const [publishableKey, setPublishableKey] = useState("");
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);
  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "BulRides, Inc.",
      intentConfiguration: {
        mode: {
          amount: 1099,
          currencyCode: "GBP",
        },
        confirmHandler: async (
          paymentMethod,
          shouldSavePaymentMethod,
          intentCreationCallback,
        ) => {
          const { paymentIntent, customer } = await fetchAPI(
            "/(api)/(stripe)/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: fullName || email.split("@")[0],
                email: email,
                amount: amount,
                paymentMethodId: paymentMethod.id,
              }),
            },
          );
      },
    });
    if (error) {
      //handle error
    }
  };

  const onPaymentSheet = async () => {
    await initializePaymentSheet();
     const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setSuccess(true);
    }
  };

  // return (
  //   <Screen>
  //     <Button
  //       variant="primary"
  //       disabled={!loading}
  //       title="Checkout"
  //       onPress={openPaymentSheet}
  //     />
  //   </Screen>  
  };
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
