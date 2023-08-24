import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schema';
import { useNavigate } from 'react-router-dom'


function LoginForm() {

    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: basicSchema
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
                    placeholder='şifrenizi tekrar giriniz'
                    className={errors.confirmPassword ? 'input-error' : ''}
                />
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </div>
            <button onClick={() => navigate('/home')} type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;