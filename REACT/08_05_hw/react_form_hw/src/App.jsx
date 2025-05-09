import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "./components/InputField/InputField";
import masterCardSvg from "../src/assets/mastercard.svg"

const schemaBillingInfo = yup.object({
  cardNumber: yup
    .string()
    .max(16)
    .required("Enter valid card number"),
  nameOnCard: yup
    .string()
    .matches(/^[a-zA-Zа-яА-я]*$/,"Name can't contain numbers")
    .required("Enter"),
  cvc: yup
    .string()
    .max(3)
    .required(),
  expirationDate: yup
    .string()
    .matches(/^d([0[1-9]|1[0-2]])\/?([2-9]5)*$/)
    .required(),
  
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
     <InputField
        label="Card number"
        hint=""
        placeholder="1234 5678 9012 3456"
        icon={masterCardSvg}
        {...register('cardNumber')}
        error={errors.cardNumber?.message}
      />

      <input type="submit" />
    </form>
  );
}

export default App;
