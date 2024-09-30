import {z} from 'zod'

export const registerSchema = z.object({
username: z.string({
    required_error: 'El nombre de usuario es Requerido'
}),
email: z.string({
    required_error: 'El correo es requerido'
}).email({
    required_error: 'El correo es Invalido'
}),
password: z.string({
    required_error: 'La constraseña es requerida'
}).min(9,{
    message: 'La contraseña debe ser mayor a 9 caracteres',
}),

});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'El correo es requerido',
    }).email({
        message: 'El correo es Invalido',
    }),
    password: z.string({
        required_error: 'La contraseña es requerida',
    }).min(6, {
        meesage: 'La constraseña debe ser mayor a 9 caracteres',
    }),
});