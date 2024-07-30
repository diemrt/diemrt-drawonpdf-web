import { useForm } from "react-hook-form";
import { INITIAL_STATE } from "../utils";

/**
 * Custom hook that provides a form helper object using react-hook-form.
 * @returns The form helper object provided by react-hook-form.
 */
const useFormHelperHook = () => {
  return useForm({
    defaultValues: INITIAL_STATE,
  });
};

export default useFormHelperHook;
