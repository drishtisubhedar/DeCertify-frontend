import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const inputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IssuedCertificatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-montserrat h-[832px] mx-auto sm:pl-5 pl-[27px] relative w-full">
        <div className="absolute flex flex-row gap-[7px] items-start justify-end left-[3%] p-1 md:px-5 top-[7%] w-[24%]">
          <Img
            className="h-[49px] mt-0.5"
            src="images/img_file.svg"
            alt="file"
          />
          <Text
            className="mb-2.5 mt-0.5 sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
            size="txtMontserratRomanBold44"
          >
            <span className="text-deep_purple-A100 font-montserrat text-left font-bold">
              De
            </span>
            <span className="text-white-A700 font-montserrat text-left font-bold">
              Certify
            </span>
          </Text>
        </div>
        <div className="absolute font-inter h-[832px] inset-y-[0] my-auto md:px-5 right-[0] w-[96%] md:w-full">
          <Img
            className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] rotate-[-90deg] w-1/5"
            src="images/img_shadow_3.png"
            alt="shadow"
          />
          <div className="absolute bottom-[20%] flex flex-col font-montserrat md:gap-10 gap-[62px] items-center justify-start left-[0] w-[79%]">
            <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[65px] text-transparent"
                size="txtMontserratRomanMedium65"
              >
                Issue Your Certificate
              </Text>
              <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between w-full">
                <Input
                  name="name"
                  placeholder="Enter Your name"
                  className="!placeholder:text-deep_purple-50_b2_01 !text-deep_purple-50_b2_01 font-medium md:text-[27px] p-0 sm:text-[25px] text-[29px] text-left w-full"
                  wrapClassName="sm:flex-1 sm:mt-0 mt-0.5 pl-[9px] sm:w-full"
                  type="text"
                  color="deep_purple_50"
                  size="xs"
                  variant="underline"
                ></Input>
                <SelectBox
                  className="!text-deep_purple-50_b2_01 sm:flex-1 font-medium mb-[3px] sm:text-2xl md:text-[26px] text-[28px] text-left w-[28%] sm:w-full"
                  placeholderClassName="!text-deep_purple-50_b2_01"
                  indicator={
                    <Img
                      className="h-3 mr-[0] outline-deep_purple-50_b2_01 outline-[2px] outline w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="input"
                  options={inputOptionsList}
                  isSearchable={false}
                  placeholder="Select Course"
                  color="deep_purple_50"
                  size="xs"
                  variant="underline"
                />
              </div>
            </div>
            <div className="flex flex-col font-inter md:gap-10 gap-[67px] items-start justify-start w-[99%] md:w-full">
              <div className="flex flex-col gap-[17px] justify-start w-[61%] md:w-full">
                <Input
                  name="language"
                  placeholder="Select Your Institute "
                  className="font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_99 sm:text-[25px] text-[29px] text-deep_purple-50_99 text-left w-full"
                  wrapClassName="md:ml-[0] ml-[9px] w-1/2"
                ></Input>
                <Line className="bg-deep_purple-50 h-0.5 w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[200px] rounded-[30px]"
                  rightIcon={
                    <div className="ml-3 bg-purple-900_01 my-[5px]">
                      <Img
                        src="images/img_checkmark_purple_900_01.svg"
                        alt="checkmark"
                      />
                    </div>
                  }
                  color="purple_200"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-medium md:text-[22px] sm:text-xl text-2xl text-left">
                    Issued
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium min-w-[712px] md:min-w-full sm:text-[25px] md:text-[27px] text-[29px] text-center text-deep_purple-50"
                  onClick={() => navigate("/certificate")}
                >
                  Unique id : 0x1Cf7c7E766cDAvTcF35d79E97CCcFc
                </Button>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[318px] right-[5%] top-[7%]"
            rightIcon={
              <div className="h-[46px] ml-[11px] pt-[13px] pb-3.5 pl-[11px] pr-2.5 w-[46px] bg-deep_purple-A100 left-[1%] absolute rounded-[50%]">
                <Img
                  className="absolute"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
            }
            shape="round"
            color="purple_A700"
            size="sm"
            variant="outline"
          >
            <div className="font-medium leading-[normal] text-left text-xl">
              Connected
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default IssuedCertificatePage;
