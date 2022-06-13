import DummyInfos from "../dummy/infos";

type checkingProps = {
  id: string;
  value: string;
  isCheckedInfos: any;
  setIsCheckedInfos: any;
}

const checking = ({id, value, isCheckedInfos, setIsCheckedInfos} : checkingProps) => {
  if (id === "email") {
    setIsCheckedInfos({...isCheckedInfos, "email": !DummyInfos.some(info => info["email"] === value)})
  } else if (id === "phone") {
    setIsCheckedInfos({...isCheckedInfos, "phone": !DummyInfos.some(info => info["phone"] === value)})
  } else if (id === "userName") {
    setIsCheckedInfos({...isCheckedInfos, "userName": !DummyInfos.some(info => info["userName"] === value)})
  } else if (id === "recommender") {
    setIsCheckedInfos({...isCheckedInfos, "recommender": DummyInfos.some(info => info["userName"] === value)})
  }
}

export default checking;