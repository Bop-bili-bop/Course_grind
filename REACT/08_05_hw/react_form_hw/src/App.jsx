import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./components/InputField";
import mastercardlogo from "../src/assets/mastercard-svgrepo-com.svg";
import Button from "./components/Button";
import FormGrid from "./components/FormGrid";
import { countryOptions, stateOptions } from "./country";
import FetchIssue from "./components/FetchIssue";
import { useState } from "react";
import Toast from "./components/Toast";

const schemaBillingInfo = yup.object({
  cardNumber: yup
    .string()
    .length(16, "Card number must be 16 digits long")
    .matches(/^\d{16}$/)
    .required("Enter valid card number"),
  nameOnCard: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я ]*$/, "Name can't contain numbers")
    .required("Enter name"),
  cvc: yup
    .string()
    .length(3, "Must contain 3 digits")
    .matches(/^\d{3}$/)
    .required("Enter CVC"),
  expirationDate: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format")
    .required("Enter expiration date"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Enter a valid emal (user@example.com)"),
  country: yup
    .string()
    .oneOf(
      countryOptions.map((c) => c.name),
      "Choose your country",
    )
    .required("Choose your country"),
  addressStreet: yup.string().required("enter your street address"),
  buildingType: yup.string(),
  city: yup.string().required("Choose your city"),
  state: yup.string().oneOf(
    stateOptions.map((s) => s.name),
    "Choose your state ",
  ),
  zip: yup
    .string()
    .matches(/^\d{3,10}$/, "Zip code should contain from 3 to 10 digits")
    .required(""),
});

const App = () => {
  const [status, setStatus] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaBillingInfo),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const delay = Math.floor(Math.random() * 3000) + 1000;
    try {
      await new Promise((res) => setTimeout(res, delay));

      if (delay > 2500) {
        throw new Error("Data fetch issue");
      }
      if (delay > 1500) {
        setFormStatus("error");
      }

      setFormStatus("success");
      setStatus("success");
      console.log(data);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {status === "error" ? (
        <FetchIssue />
      ) : (
        <div className=" p-12 w-full">
          <div className="mb-12">
            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
              Billing Information
            </h1>
            <p className="text-neutral-400">
              Update your billing details and address
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGrid formName="Payment details" border>
              <InputField
                label="Card number"
                placeholder="1234 5678 9012 3456"
                {...register("cardNumber")}
                icon={<img src={mastercardlogo} className="w-7" alt="logo" />}
                error={errors.cardNumber?.message}
              />
              <InputField
                label="Cardholder name"
                placeholder="John Doe"
                {...register("nameOnCard")}
                error={errors.nameOnCard?.message}
              />
              <div className="flex gap-8">
                <div className="flex-1">
                  <InputField
                    label="Expiry"
                    placeholder="MM/YY"
                    {...register("expirationDate")}
                    error={errors.expirationDate?.message}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label="CVC"
                    placeholder="123"
                    {...register("cvc")}
                    error={errors.cvc?.message}
                  />
                </div>
              </div>
            </FormGrid>
            <FormGrid formName="Email address" border>
              <InputField
                label="Email address"
                placeholder="user@example.com"
                {...register("email")}
                error={errors.email?.message}
              />
            </FormGrid>
            <FormGrid>
              <InputField
                label="Country / Region"
                select
                defaultOption="Select a country"
                selectOptions={countryOptions}
                {...register("country")}
                error={errors.country?.message}
              />
              <InputField
                label="Address"
                placeholder="Street address"
                {...register("addressStreet")}
                error={errors.addressStreet?.message}
              />
              <InputField
                placeholder="Apartment, suite, etc. (optional)"
                {...register("buildingType")}
                error={errors.buildingType?.message}
              />
              <div className="flex gap-8">
                <div className="flex-1">
                  <InputField
                    label="City"
                    placeholder="City"
                    {...register("city")}
                    error={errors.city?.message}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label="State"
                    select
                    defaultOption="State"
                    selectOptions={stateOptions}
                    placeholder="State"
                    {...register("state")}
                    error={errors.state?.message}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label="Zip"
                    placeholder="01000"
                    {...register("zip")}
                    error={errors.zip?.message}
                  />
                </div>
              </div>
            </FormGrid>
            {formStatus !== "" && (
              <div className="flex justify-end">
                {formStatus === "error" ? (
                  <Toast error>
                    Unexpected error. Please try again later or contact support.
                  </Toast>
                ) : (
                  <Toast success>Changes saved successfully</Toast>
                )}
              </div>
            )}
            <div className="flex justify-end">
              <Button onClick={handleSubmit}>Save Changes</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
