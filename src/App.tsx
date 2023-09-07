import { Routes, Route, Navigate } from "react-router-dom";
import { Registration, SendEmail, VerifiAccount } from "./pages/Registration";
import {  useState } from "react";
import {  avatar } from "./types";
import { Login } from "./pages/Login";
import { ForgotPassword, RecoveryPassword } from "./services/passwordRecovery";

function App() {


  const [avatar, setAvatar] = useState<avatar>({
    avatar: "",
    name: "",
    moviestitle: [],
    token: "",
  });

  return (
    <div className="w-full h-full ">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/login"
          element={<Login setAvatar={setAvatar} avatar={avatar} />}
        />
        <Route path="/VerifyAccount" element={<VerifiAccount />} />
        <Route path="/successfullyCreated" element={<SendEmail />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/RecoveryPassword" element={<RecoveryPassword />} />
      </Routes>
    </div>
  );
}

export default App;
