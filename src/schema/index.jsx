import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Kullanıcı adı min 4 karakter uzunluğunda olmalıdır')
        .required('Kullanıcı adı zorunludur'),
    email: yup
        .string()
        .email('Geçerli bir email giriniz')
        .required('Email girmek zorunludur'),
    password: yup
        .string()
        .min(5, 'Lütfen min 5 karakter giriniz')
        .matches(passwordRules, {
            message: 'Lütfen en az 1 nüyük harf 1 küçük harf ve 1 sayı giriniz',
        }).required('Şifre girmek zorunludur'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Tekrar şifre girmek zorunludur'),
});