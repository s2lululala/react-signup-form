import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  function checkEmail() {
    console.log(`Email is ${email}`);
    setEmailCheck(true);
  }

  function checkPhone() {
    console.log(`Phone number is ${email}`);
    setPhoneCheck(true);
  }

  return(
    <div>
      <div>
        * 표시된 항목은 필수로 입력해야합니다
      </div>
      <div>
        이메일*
        <div>
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
      <div>
        전화번호*
        <div>
          <input
            type="text"
            value={phone}
            onChange={(e) => {setPhone(e.target.value); phoneReg.test(e.target.value) ? setIsValidPhone(true) : setIsValidPhone(false);}}
          />
          <button disabled={!phoneCheck && isValidPhone ? false : true} onClick={checkPhone}>전화번호 중복확인</button>
          {isValidPhone ? phoneCheck? "확인되었습니다" : "유효한 전화번호입니다" : "유효하지 않은 전화번호입니다"}
        </div>
      </div>
      <div>
        비밀번호* (비밀번호는 8자 이상, 영문 대,소문자, 숫자를 포함해야합니다)
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value); passwordReg.test(e.target.value) ? setIsValidPassword(true) : setIsValidPassword(false); repassword === e.target.value ? setPasswordCheck(true) : setPasswordCheck(false);}}
          />
          {isValidPassword ? "" : "비밀번호 형식에 맞지 않습니다"}
        </div>
        비밀번호 확인*
        <div>
          <input
            type="password"
            value={repassword}
            onChange={(e) => {setRepassword(e.target.value); password === e.target.value ? setPasswordCheck(true) : setPasswordCheck(false);}}
          />
          {passwordCheck ? "" : "비밀번호가 일치하지 않습니다"}
        </div>
      </div>
      <div>
        <button disabled={emailCheck && phoneCheck && isValidPassword && passwordCheck? false : true}>제출</button>
      </div>
    </div>
  )
}

export default Signup;