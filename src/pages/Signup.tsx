import { useState } from "react";
import InputBox from "../components/InputBox";
import InputCheckBox from "../components/InputCheckBox";
import validateFormInfos from "../utils/validation";
import checking from "../utils/checking";
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  const [infos, setInfos] = useState({
    email: "",
    phone: "",
    password: "",
    repassword: "",
    userName: "",
    recommender: "",
    allTerms: false,
    term: false,
    privacy: false,
    marketing: false
  });

  const [isValidInfos, setIsValidInfos] = useState({
    email: false,
    phone: false,
    password: false
  });

  const [isCheckedInfos, setIsCheckedInfos] = useState({
    email: false,
    phone: false,
    password: false,
    userName: false,
    recommender: false
  })

  function handleChange(e : React.FormEvent<HTMLInputElement>) {
    const validationList = ["email", "phone", "password"];
    const checkedList = ["email", "phone", "userName", "recommender"]
    const {id, value} = e.currentTarget;
    setInfos({...infos, [id]: value});
    if (validationList.includes(id) && !validateFormInfos({id, value, isValidInfos, setIsValidInfos})) {
      if (checkedList.includes(id))
        setIsCheckedInfos({...isCheckedInfos, [id]: false})
      return;
    }
    if (id === "repassword")
      infos.password === value ? setIsCheckedInfos({...isCheckedInfos, password: true}) : setIsCheckedInfos({...isCheckedInfos, password: false});
    if (checkedList.includes(id))
      checking({id, value, isCheckedInfos, setIsCheckedInfos})
  }

  const handleChangeInputCheckBox = (e : React.FormEvent<HTMLInputElement>) => {
    const {id, checked} = e.currentTarget;
    if (id === "allTerms") {
      setInfos({...infos, allTerms: checked, term: checked, privacy: checked, marketing: checked});
    } else {
        setInfos({...infos, [id]: checked})
      if (!checked) {
        setInfos({...infos, [id]: false, allTerms: false})
      } else if ((infos.term && infos.privacy) || (infos.privacy && infos.marketing) || (infos.term && infos.marketing)) {
        setInfos({...infos, [id]: true, allTerms: true})
      }
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/greeting");
  }

  return(
    <div className="signup">
      <div className="signup__title">
        회원가입
      </div>
      <div className="signup__msg">
        * 표시된 항목은 필수로 입력해야합니다
      </div>
      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="signup__form__content">
          <InputBox
            type="text"
            id="email"
            value={infos.email}
            onChange={handleChange}
            label="이메일"
            required={true}
          />
          <div className="signup__form__content__msg">
            {isValidInfos.email ? isCheckedInfos.email ? "사용 가능한 이메일입니다" : "이미 사용중인 이메일입니다" : "유효하지 않은 이메일입니다"}
          </div>
        </div>
        <div className="signup__form__content">
          <InputBox
            type="text"
            id="phone"
            value={infos.phone}
            onChange={handleChange}
            label="전화번호"
            required={true}
          />
          <div className="signup__form__content__msg">
            {isValidInfos.phone ? isCheckedInfos.phone? "사용 가능한 전화번호입니다" : "이미 사용중인 전화번호입니다" : "유효하지 않은 전화번호입니다"}
          </div>
        </div>
        <div className="signup__form__content">
          <InputBox
            type="password"
            id="password"
            value={infos.password}
            onChange={handleChange}
            label="비밀번호(비밀번호는 8자 이상, 영문 대,소문자, 숫자를 포함해야합니다)"
            required={true}
          />
          <div className="signup__form__content__msg">
            {isValidInfos.password ? "" : "비밀번호 형식에 맞지 않습니다"}
          </div>
        </div>
        <div className="signup__form__content">
          <InputBox
            type="password"
            id="repassword"
            value={infos.repassword}
            onChange={handleChange}
            label="비밀번호 확인"
            required={true}
          />
          <div className="signup__form__content__msg">
            {isCheckedInfos.password ? "" : "비밀번호가 일치하지 않습니다"}
          </div>
        </div>
        <div className="signup__form__content">
          <InputBox
            type="text"
            id="userName"
            value={infos.userName}
            onChange={handleChange}
            label="유저네임"
            required={true}
          />
          <div className="signup__form__content__msg">
            {isCheckedInfos.userName ? "사용 가능한 유저네임입니다" : "사용중인 유저네임입니다"}
          </div>
        </div>
        <div className="signup__form__content">
          <InputBox
            type="text"
            id="recommender"
            value={infos.recommender}
            onChange={handleChange}
            label="추천인 유저네임"
            required={false}
          />
          <div className="signup__form__content__msg">
            {infos.recommender && (isCheckedInfos.recommender ? "추천인이 확인되었습니다" : "추천인이 확인되지 않았습니다")}
          </div>
        </div>
        <div className="signup__form__checkbox">
          <div className="signup__form__checkbox__title">
            약관 및 마케팅 동의
          </div>
          <div>
            <InputCheckBox
              id="allTerms"
              checked={infos.allTerms}
              onChange={handleChangeInputCheckBox}
              label="모두 동의"
              required={false}
              />
            <InputCheckBox
              id="term"
              checked={infos.term}
              onChange={handleChangeInputCheckBox}
              label="약관"
              required={true}
              />
            <InputCheckBox
              id="privacy"
              checked={infos.privacy}
              onChange={handleChangeInputCheckBox}
              label="개인정보활용동의"
              required={true}
              />
            <InputCheckBox
              id="marketing"
              checked={infos.marketing}
              onChange={handleChangeInputCheckBox}
              label="마케팅동의"
              required={false}
              />
          </div>
        </div>
        <div className="signup__form__submit">
          <input
            className="signup__form__submit__input"
            type="submit"
            value="제출"
            disabled={
              isCheckedInfos.email && isCheckedInfos.phone
              && isValidInfos.password && isCheckedInfos.password
              && isCheckedInfos.userName
              && ((infos.recommender && isCheckedInfos.recommender) || !infos.recommender)
              && infos.term && infos.privacy
              ? false : true
          }
          />
        </div>
      </form>
    </div>
  )
}

export default Signup;