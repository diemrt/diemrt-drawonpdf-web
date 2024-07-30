import { Control, useFieldArray, FieldValues, ArrayPath } from "react-hook-form";

/**
 * Custom hook that provides a field array helper object using react-hook-form.
 * @param control The form control object provided by react-hook-form.
 * @param name The name of the field array.
 * @returns The field array helper object provided by react-hook-form.
 */
const useFieldArrayHelperHook = <T extends FieldValues>(
    control: Control<T>,
    name: keyof T | ArrayPath<T>
) => {
    return useFieldArray({
        control,
        name: name as ArrayPath<T>,
    });
};

export default useFieldArrayHelperHook;
