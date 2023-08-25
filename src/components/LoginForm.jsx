import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schema';
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        actions.resetForm();
        navigate('/home');
    };

    const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema, onSubmit
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-div'>
                <label>Kullanıcı Adı</label>
                <input
                    type='text'
                    id='username'
                    onChange={handleChange}
                    value={values.username}
                    placeholder='Kullanıcı adınızı giriniz'
                    className={errors.username ? 'input-error' : ''}
                />
                {errors.username && <p className='error'>{errors.username}</p>}
            </div>
            <div className='input-div'>
                <label>Email</label>
                <input
                    type='email'
                    id='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='Email adresinizi giriniz'
                    className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='input-div'>
                <label>Şifre</label>
                <input
                    type='password'
                    id='password'
                    onChange={handleChange}
                    value={values.password}
                    placeholder='Şifrenizi giriniz'
                    className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className='input-div'>
                <label>Şifre Tekrarı</label>
                <input
                    type='password'
                    id='confirmPassword'
                    onChange={handleChange}
                    value={values.confirmPassword}
                    placeholder='Şifrenizi tekrar giriniz'
                    className={errors.confirmPassword ? 'input-error' : ''}
                />
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </div>
            <button disabled={isSubmitting} type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;