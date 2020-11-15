import {useForm} from "react-hook-form"
import './style.scss'
export default function FormRegister() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="wrapper">
            <div className="col-1">
                    <form className="form-register" onSubmit={ handleSubmit(onSubmit)} >
                        <div className="header-form">
                            <h2>INSCREVA-SE</h2>
                        </div>
                        <input name ="usuario" ref = {register({required: true })} />
                        {errors.password && <span>This field is required</span>}
                        <input type="email" name ="email" ref = {register({required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input name ="password" ref = {register({required: true }) } />
                        {errors.password && <span>This field is required</span>}
                        <button type="submit">asdasd</button>
                    </form >
                </div>
        </div>
    )}