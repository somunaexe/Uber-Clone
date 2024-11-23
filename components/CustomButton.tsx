import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

/**
 * Returns the background style class based on the provided variant.
 *
 * @param variant - The background variant type which can be "primary",
 *                  "secondary", "danger", "outline", or "success".
 * @returns A string representing the CSS class for the background style.
 *          Defaults to "bg-[#0286ff]" for the primary variant.
 */
const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

/**
 * Returns the text style class based on the provided text variant.
 *
 * @param variant - The text variant type which can be "primary",
 *                  "secondary", "danger", "success", or "default".
 * @returns A string representing the CSS class for the text style.
 *          Defaults to "text-white" for the default variant.
 */
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};
/**
 * A custom button component that can be used to create buttons with different
 * background and text variants. The button also has a default shadow and rounded
 * corners.
 *
 * @param {Function} onPress - The function to run when the button is pressed.
 * @param {string} title - The text to display on the button.
 * @param {string} [bgVariant=primary] - The background variant of the button.
 *                                    Can be "primary", "secondary", "danger",
 *                                    "outline", or "success".
 * @param {string} [textVariant=default] - The text variant of the button.
 *                                       Can be "primary", "secondary", "danger",
 *                                       "success", or "default".
 * @param {React.ComponentType<any>} [IconLeft] - The icon to display on the left
 *                                               side of the button.
 * @param {React.ComponentType<any>} [IconRight] - The icon to display on the right
 *                                                side of the button.
 * @param {string} [className] - Additional CSS classes to apply to the button.
 * @param {*} [props] - Any additional props to pass to the TouchableOpacity component.
 */

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);
export default CustomButton;
