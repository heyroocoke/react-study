import React from "react";

const Form = ({updateMainCat}) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");


  function handleInputChange(e){
    const userValue = e.target.value;
    setErrorMessage("");

    if(includesHangul(userValue)){
      setErrorMessage("한글은 입력할 수 없습니다.");
    }

    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e){
    e.preventDefault();
    setErrorMessage("");

    if(value ===""){
      setErrorMessage("이름없이는 생성할 수 없습니다.");
      return;
    }

    updateMainCat(value); 
  }

  return(
    <form onSubmit={handleFormSubmit} className="f_dis">
      <input 
      className="t_box"
      type="text" 
      name="name" 
      placeholder="영어로 이름을 지어주세요" 
      value={value}
      onChange={handleInputChange}
      />
      <button type="submit" className="t_btn">생성</button>
      <p style={{color:"red"}}>{errorMessage}</p>
    </form>
  );
};

export default Form;