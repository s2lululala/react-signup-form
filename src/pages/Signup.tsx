import { SetStateAction, useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

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
        이메일
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
        전화번호
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
        <button disabled={emailCheck ? false : true}>제출</button>
      </div>
    </div>
  )
}

export default Signup;