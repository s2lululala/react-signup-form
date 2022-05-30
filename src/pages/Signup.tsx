import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  function checkEmail() {
    console.log(`Email is ${email}`);
    setEmailCheck(true);
  }

  return(
    <div>
      <div>
        이메일
        <input
          type="text"
          value={email}
          onChange={(e) => {setEmail(e.target.value); emailReg.test(e.target.value) ? setIsValidEmail(true) : setIsValidEmail(false);}}
          disabled={emailCheck ? true : false}
        />
        <button disabled={!emailCheck && isValidEmail ? false : true} onClick={checkEmail}>이메일 중복확인</button>
        {isValidEmail ? emailCheck? "인증되었습니다" : "유효한 이메일입니다" : "유효하지 않은 이메일입니다"}
      </div>
    </div>
  )
}

export default Signup;