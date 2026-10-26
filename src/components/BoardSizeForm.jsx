import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
    .object({
        height: z.coerce.number().int().min(2, "Min 2").max(50, "Max 50"),
        width: z.coerce.number().int().min(2, "Min 2").max(50, "Max 50"),
        mines: z.coerce.number().int().min(1, "Min 1"),
    })
    .refine((d) => d.mines < d.width * d.height, {
        message: "Too many mines for this board size",
        path: ["mines"], // the error shows up under the mines field
    });


const BoardSizeForm = (props) => {
    const defaultValues = props.defaultValues;
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(schema), defaultValues, });



    return <>
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <label>
                Height
                <input {...register("height")} inputMode="numeric" />
            </label>
            {errors.height && <p>{errors.height.message}</p>}

            <label>
                Width
                <input {...register("width")} inputMode="numeric" />
            </label>
            {errors.width && <p>{errors.width.message}</p>}

            <label>
                Mines
                <input {...register("mines")} inputMode="numeric" />
            </label>
            {errors.mines && <p>{errors.mines.message}</p>}

            <button type="submit">Start</button>
        </form>
    </>
}

export default BoardSizeForm;