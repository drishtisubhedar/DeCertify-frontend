import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const inputOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IssueCertificatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-montserrat items-center justify-start mx-auto sm:pl-5 pl-[27px] w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between max-w-[1253px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[58px] w-[59%] md:w-full">
            <div className="flex flex-row gap-[7px] items-start justify-end p-1 w-[42%] md:w-full">
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
            <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start md:ml-[0] ml-[33px] mt-[81px] w-[96%] md:w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[65px] text-transparent"
                size="txtMontserratRomanMedium65"
              >
                Issue Your Certificate
              </Text>
              <div className="flex flex-col font-inter gap-[17px] justify-start w-[82%] md:w-full">
                <Input
                  name="enteryourname"
                  placeholder="Enter Your name"
                  className="font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_b2_01 sm:text-[25px] text-[29px] text-deep_purple-50_b2_01 text-left w-full"
                  wrapClassName="md:ml-[0] ml-[9px] w-[41%]"
                ></Input>
                <div className="h-0.5 relative w-full">
                  <Line className="bg-deep_purple-50 h-0.5 m-auto w-full" />
                  <Img
                    className="absolute h-px inset-[0] justify-center m-auto"
                    src="images/img_inputname.svg"
                    alt="inputname"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter md:gap-10 gap-[67px] items-start justify-start md:ml-[0] ml-[27px] mt-[62px] w-[78%] md:w-full">
              <div className="flex flex-col gap-[17px] justify-start w-full">
                <Input
                  name="language"
                  placeholder="Select Your Institute "
                  className="font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_b2_01 sm:text-[25px] text-[29px] text-deep_purple-50_b2_01 text-left w-full"
                  wrapClassName="md:ml-[0] ml-[9px] w-1/2"
                ></Input>
                <Line className="bg-deep_purple-50 h-0.5 w-full" />
              </div>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[200px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/issuedcertificate")}
                color="purple_200"
                size="sm"
                variant="fill"
              >
                Issue
              </Button>
            </div>
          </div>
          <div className="font-inter h-[832px] relative w-[42%] md:w-full">
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] rotate-[-90deg] w-[48%]"
              src="images/img_shadow_2.png"
              alt="shadow"
            />
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[318px] right-[12%] top-[7%]"
              rightIcon={
                <div className="h-[46px] ml-[11px] pt-[13px] pb-3.5 pl-[11px] pr-2.5 w-[46px] bg-deep_purple-A100 left-[2%] absolute rounded-[50%]">
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
            <SelectBox
              className="absolute font-medium left-[0] sm:text-2xl md:text-[26px] text-[28px] text-left top-[44%] w-1/2 sm:w-full"
              placeholderClassName="text-deep_purple-50_7e"
              indicator={
                <Img
                  className="h-3 mr-[0] outline-deep_purple-50_b2_01 outline-[2px] outline w-6 right-[0] absolute"
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
      </div>
    </>
  );
};

export default IssueCertificatePage;
