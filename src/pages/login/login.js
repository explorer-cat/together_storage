
import './login.css';
import React, { useState } from 'react';
import KakaoLoginBtn from '../../components/KakaoLoginBtn'
import NaverLoginBtn from '../../components/NaverLoginBtn'



function Login({token}) {
  console.log("token", token)
  return (
    <div className="Login">
        <KakaoLoginBtn />
        <NaverLoginBtn />
    </div>
  );
}

export default Login;
