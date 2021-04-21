import React from "react";
import {useFormik} from "formik";
import s from "./Login.module.css"

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length <= 2) {
                errors.password = "Password length must be more then two"
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <h1 className={s.title}>Login</h1>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <label htmlFor="login">Login</label>
                <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email
                    ? <div style={{color: 'red'}}>{formik.errors.email}</div>
                    : null}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password
                    ? <div style={{color: "red"}}>{formik.errors.password}</div>
                    : null}
                <label htmlFor="checkbox">Remember me</label>
                <input
                    id="checkbox"
                    type="checkbox"
                    name="rememberMe"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />
                    <button>Login</button>
            </form>
        </div>
    )
}

export default Login