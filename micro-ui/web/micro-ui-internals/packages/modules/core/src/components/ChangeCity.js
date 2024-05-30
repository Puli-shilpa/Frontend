import { Dropdown } from "@egovernments/digit-ui-react-components";
import React, { useState, useEffect } from "react";
import { CustomButton, Menu } from "@egovernments/digit-ui-react-components";
import { useHistory } from "react-router-dom";

const stringReplaceAll = (str = "", searcher = "", replaceWith = "") => {
  if (searcher == "") return str;
  while (str?.includes(searcher)) {
    str = str?.replace(searcher, replaceWith);
  }
  return str;
};

const ChangeCity = (prop) => {
  const [dropDownData, setDropDownData] = useState(null);
  const [selectCityData, setSelectCityData] = useState([]);
  let sortSelectCityData=[];
  if(selectCityData.length>0){
    sortSelectCityData=selectCityData.sort((a, b) => a.label.localeCompare(b.label));
  }
  const [selectedCity, setSelectedCity] = useState([]); //selectedCities?.[0]?.value
  const history = useHistory();
  const isDropdown = prop.dropdown || false;
  let selectedCities = [];

  const handleChangeCity = (city) => {
    const loggedInData = Digit.SessionStorage.get("citizen.userRequestObject");
    const filteredRoles = Digit.SessionStorage.get("citizen.userRequestObject")?.info?.roles?.filter(role => role.tenantId === city.value);  
     if (filteredRoles?.length > 0) {
      loggedInData.info.roles = filteredRoles;
      loggedInData.info.tenantId = city?.value;
    }
    Digit.SessionStorage.set("Employee.tenantId", city?.value);
    localStorage.setItem("Employee.tenant-id", city?.value);
    Digit.UserService.setUser(loggedInData);
    setDropDownData(city);
    if (window.location.href.includes("/digit-ui/employee/")) {
      const redirectPath = location.state?.from || "/digit-ui/employee";
      history.replace(redirectPath);
    }
    window.location.reload();
  };

  useEffect(() => {
    const userloggedValues = Digit.SessionStorage.get("citizen.userRequestObject");
    let teantsArray = [], filteredArray = [];
    userloggedValues?.info?.roles?.forEach(role => teantsArray.push(role.tenantId));
    let unique = teantsArray.filter((item, i, ar) => ar.indexOf(item) === i);
    unique?.forEach((uniCode) => {
      filteredArray.push({
        label: prop?.t(`TENANT_TENANTS_${stringReplaceAll(uniCode, ".", "_")?.toUpperCase()}`),
        value: uniCode
      })
    });
    selectedCities = filteredArray?.filter(select => select.value == Digit.SessionStorage.get("Employee.tenantId"));
    const convertedData = filteredArray.map(item => ({
      name: item.label,
      code: item.value
    }));
    Digit.SessionStorage.set("Tenants",convertedData)
    setSelectCityData(filteredArray);
  }, [dropDownData]);

  // if (isDropdown) {
  return (
    <div style={prop?.mobileView ? {color: "#767676"} : {width:"300px"}}>
      <Dropdown
        option={sortSelectCityData}
        selected={sortSelectCityData.find((cityValue) => cityValue.value === dropDownData?.value)}
        optionKey={"label"}
        select={handleChangeCity}
        freeze={true}
        customSelector={<label className="cp">{prop?.t(`TENANT_TENANTS_${stringReplaceAll(Digit.SessionStorage.get("Employee.tenantId"), ".", "_")?.toUpperCase()}`)}</label>}
      />
    </div>
  );
  // } else {
  //   return (
  //     <React.Fragment>
  //       <div style={{ marginBottom: "5px" }}>City</div>
  //       <div className="language-selector" style={{display: "flex", flexWrap: "wrap"}}>
  //         {selectCityData?.map((city, index) => (
  //           <div className="language-button-container" key={index}>
  //             <CustomButton
  //               selected={city.value === Digit.SessionStorage.get("Employee.tenantId")}
  //               text={city.label}
  //               onClick={() => handleChangeCity(city)}
  //             ></CustomButton>
  //           </div>
  //         ))}
  //       </div>
  //     </React.Fragment>
  //   );
  // }
};

export default ChangeCity;
