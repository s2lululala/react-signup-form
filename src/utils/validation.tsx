type validationProps = {
  id: string;
  value: string;
  isValidInfos: any;
  setIsValidInfos: any;
}

const validateFormInfos = ({id, value, isValidInfos, setIsValidInfos} : validationProps) => {
  const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (id === "email") {
    setIsValidInfos({...isValidInfos, "email": emailReg.test(value)});
    return(emailReg.test(value));
  } else if (id === "phone") {
    setIsValidInfos({...isValidInfos, "phone": phoneReg.test(value)})
    return(phoneReg.test(value));
  } else {
    setIsValidInfos({...isValidInfos, "password": passwordReg.test(value)})
    return(phoneReg.test(value));
  }
}

export default validateFormInfos;