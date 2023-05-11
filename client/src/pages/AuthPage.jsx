import React, { useState } from "react";
import { registerAction, loginAction } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux'

const Auth = () => {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({ userName: "", email: "", password: "" });
    const dispatch = useDispatch();

    const onChangeFunc = (e) => {
        // bütün giriş kayıtlarını döndürüyoruz ve sonrasında
        // e.target.name lerine göre bakıp value değerlerini veriyoruz
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    const authFunc = () => {
        if (signUp) {
            dispatch(registerAction(authData))
        } else {
            dispatch(loginAction(authData))
        }
    }


    console.log("Giriş Kayıtları:", authData);

    return (
        <div className="w-full h-screen bg-gray-200 flex items-center justify-center m-0 z-50">
            <div className="w-1/3 bg-slate-50 p-3">
                <h1 className="text-2xl text-indigo-600 font-bold">{signUp ? "Kayıt Ol" : "Giriş Yap"} </h1>
                <div className="flex flex-col space-y-3 my-5">
                    {/* signUp true ise bize Kullanıcı Adı nı göstermesini istiyoruz */}
                    {signUp && <input className="inputStyle "
                        type="text"
                        name="userName"
                        value={authData.userName}
                        onChange={onChangeFunc}
                        placeholder="Kullanıcı Adı"

                    />}
                    <input className="inputStyle"
                        type="text"
                        name="email"
                        value={authData.email}
                        onChange={onChangeFunc}
                        placeholder="Email"
                    />
                    <input className="inputStyle"
                        type="text"
                        name="password"
                        value={authData.password}
                        onChange={onChangeFunc}
                        placeholder="Şifre"
                    />
                </div>
                <div className="controlLogin">
                    {/* bu alanda giriş ekranında signUp kontrolü yaparak 
                    "kayıt" veya "giriş" sayfasına yönlendirme yapıyoruz */}
                    {signUp ? <span onClick={() => setSignUp(false)}>Daha önce giriş yaptınız mı?</span> :
                        <span onClick={() => setSignUp(true)}>Kayıt olmak için tıklayınız!</span>
                    }
                </div>
                <div onClick={authFunc} className="signBtn">{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
                {/* signUp true ise "Kayıt Ol, false ise Giriş Yap diyoruz" */}
            </div>
        </div>
    )
};

export default Auth;