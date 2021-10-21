import { useState } from "react";

export default function useForm(initialState={}) {
    const [values, setvalues] = useState(initialState)

    const handleInputchange = ({target})=> {
        setvalues({
            ...values,
            [target.name]:target.value
        });
    }

    return [values,handleInputchange];

}
