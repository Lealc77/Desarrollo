import { useForm } from 'react-hook-form';
import usuario from '../img/Logo_shalom2.png';
import user from '../img/user.png';
import candado from '../img/candado.png'; // Importa la imagen de candado
import { useAuth } from '../context/authContext';


function LoginPage(){
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit ((data) =>{
    signin(data);
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-avatar">
          <img src={usuario} alt="Avatar" />
        </div>
        {
        signinErrors.map((error, i) =>(
            <div className ="bg-red-500 p-2 text-white my-2" key={i}>
              {error}
            </div>  
          ))
        }  


        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-field">
            <img className="icon" src={user} alt="User Icon" />
            <input type="email" {...register("email", { required: true })} placeholder="USUARIO"/> 
            {errors.email && <p className="text-red-500">El correo es requerido</p>}
          </div>


          <div className="login-field">
            <img className="icon" src={candado} alt="Password Icon" />
            <input type="password" {...register("password", { required: true })} placeholder="CONTRASEÑA"/>
            {errors.password && (<p className="text-red-500">La contraseña es requerida</p>)}
          </div>
          <button type="submit" className="login-button">
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>

  );
}

export default LoginPage