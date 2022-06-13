import { useState } from "react";
import Input from "../components/Input";
import InputBox from "../components/InputBox";
import validation from "../utils/validation";
import checking from "../utils/checking";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [infos, setInfos] = useState({
    email: "",
    phone: "",
    password: "",
    repassword: "",
    userName: "",
    recommender: "",
    allTerms: false,
    term1: false,
    term2: false,
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
    if (validationList.includes(id) && !validation({id, value, isValidInfos, setIsValidInfos})) {
      if (checkedList.includes(id))
        setIsCheckedInfos({...isCheckedInfos, [id]: false})
      return;
    }
    if (id === "repassword")
      infos.password === value ? setIsCheckedInfos({...isCheckedInfos, password: true}) : setIsCheckedInfos({...isCheckedInfos, password: false});
    if (checkedList.includes(id))
      checking({id, value, isCheckedInfos, setIsCheckedInfos})
  }

  const handleChangeInputBox = (e : React.FormEvent<HTMLInputElement>) => {
    const {id, checked} = e.currentTarget;
    if (id === "allTerms") {
      setInfos({...infos, allTerms: checked, term1: checked, term2: checked, marketing: checked});
    } else {
        setInfos({...infos, [id]: checked})
      if (!checked) {
        setInfos({...infos, [id]: false, allTerms: false})
      } else if ((infos.term1 && infos.term2) || (infos.term2 && infos.marketing) || (infos.term1 && infos.marketing)) {
        setInfos({...infos, [id]: true, allTerms: true})
      }
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (e : any) => {
    e.preventDefault();
    navigate("/greeting");
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        * 표시된 항목은 필수로 입력해야합니다
      </div>
      <div>
        이메일*
        <div>
          <Input
            type="text"
            id="email"
            value={infos.email}
            onChange={handleChange}
          />
          {isValidInfos.email ? isCheckedInfos.email ? "사용 가능한 이메일입니다" : "이미 사용중인 이메일입니다" : "유효하지 않은 이메일입니다"}
        </div>
      </div>
      <div>
        전화번호*
        <div>
          <Input
            type="text"
            id="phone"
            value={infos.phone}
            onChange={handleChange}
          />
          {isValidInfos.phone ? isCheckedInfos.phone? "사용 가능한 전화번호입니다" : "이미 사용중인 전화번호입니다" : "유효하지 않은 전화번호입니다"}
        </div>
      </div>
      <div>
        비밀번호* (비밀번호는 8자 이상, 영문 대,소문자, 숫자를 포함해야합니다)
        <div>
          <Input
            type="password"
            id="password"
            value={infos.password}
            onChange={handleChange}
          />
          {isValidInfos.password ? "" : "비밀번호 형식에 맞지 않습니다"}
        </div>
        비밀번호 확인*
        <div>
          <Input
            type="password"
            id="repassword"
            value={infos.repassword}
            onChange={handleChange}
          />
          {isCheckedInfos.password ? "" : "비밀번호가 일치하지 않습니다"}
        </div>
      </div>
      <div>
        유저네임*
        <div>
          <Input
            type="text"
            id="userName"
            value={infos.userName}
            onChange={handleChange}
          />
          {isCheckedInfos.userName ? "사용 가능한 유저네임입니다" : "사용중인 유저네임입니다"}
        </div>
      </div>
      <div>
        추천인 유저네임
        <div>
          <Input
            type="text"
            id="recommender"
            value={infos.recommender}
            onChange={handleChange}
          />
          {infos.recommender && (isCheckedInfos.recommender ? "추천인이 확인되었습니다" : "추천인이 확인되지 않았습니다")}
        </div>
      </div>
      <div>
        약관 및 마켓팅 동의
        <div>
          모두 동의
          <InputBox
            id="allTerms"
            checked={infos.allTerms}
            onChange={handleChangeInputBox}
          />

        </div>
        <div>
          약관 1*
          <InputBox
            id="term1"
            checked={infos.term1}
            onChange={handleChangeInputBox}
          />
        </div>
        <div>
          약관2*
          <InputBox
            id="term2"
            checked={infos.term2}
            onChange={handleChangeInputBox}
          />
        </div>
        <div>
          마켓팅동의
          <InputBox
            id="marketing"
            checked={infos.marketing}
            onChange={handleChangeInputBox}
          />
        </div>
      </div>
      <div>
        <input
          type="submit"
          value="제출"
          disabled={
            isCheckedInfos.email && isCheckedInfos.phone
            && isValidInfos.password && isCheckedInfos.password
            && isCheckedInfos.userName
            && ((infos.recommender && isCheckedInfos.recommender) || !infos.recommender)
            && infos.term1 && infos.term2
            ? false : true
         }
         />
      </div>
    </form>
  )
}

export default Signup;