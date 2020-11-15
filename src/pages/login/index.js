import {useForm} from "react-hook-form"
export default function Login() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={ handleSubmit(onSubmit)} >
            <input name ="usuario" ref = {register({required: true })} />
            {errors.password && <span>This field is required</span>}
            <input name ="password" ref = {register({required: true }) } />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
        </form >
    )}