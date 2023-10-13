import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RegisterInstitutePage = () => {
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
            src="images/img_shadow_4.png"
            alt="shadow"
          />
          <div className="absolute bottom-[20%] flex flex-col font-montserrat md:gap-10 gap-[62px] justify-start left-[0] w-4/5">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start ml-1.5 md:ml-[0] w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[65px] text-transparent"
                size="txtMontserratRomanMedium65"
              >
                Register Your Institute
              </Text>
              <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[17px] justify-start w-[59%] md:w-full">
                  <Input
                    name="institutename"
                    placeholder="Institute Name"
                    className="font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_b2_01 sm:text-[25px] text-[29px] text-deep_purple-50_b2_01 text-left w-full"
                    wrapClassName="md:ml-[0] ml-[9px] w-[36%]"
                  ></Input>
                  <Line className="bg-deep_purple-50 h-0.5 w-full" />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[28%] md:w-full">
                  <div className="flex flex-col gap-[15px] justify-start w-full">
                    <div className="flex flex-row gap-[51px] items-start justify-end md:ml-[0] ml-[18px] w-[94%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[65%] sm:w-full">
                        <SelectBox
                          className="font-medium sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-50_b2_01 text-left w-full"
                          placeholderClassName="text-deep_purple-50_b2_01"
                          isSearchable={false}
                          placeholder="Add Course "
                          isMulti={true}
                          options={languageOptionsList}
                          name="language"
                        />
                      </div>
                      <Img
                        className="h-[35px] w-[35px]"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div>
                    <Img
                      className="h-px"
                      src="images/img_inputname.svg"
                      alt="inputcourse"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter md:gap-10 gap-[67px] items-start justify-start w-[59%] md:w-full">
              <div className="flex flex-col gap-[17px] justify-start w-full">
                <Input
                  name="language_One"
                  placeholder="Institute Wallet Addrress "
                  className="font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_b2_01 sm:text-[25px] text-[29px] text-deep_purple-50_b2_01 text-left w-full"
                  wrapClassName="md:ml-[0] ml-[9px] w-[61%]"
                ></Input>
                <Line className="bg-deep_purple-50 h-0.5 w-full" />
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[200px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="purple_200"
                size="sm"
                variant="fill"
              >
                Register
              </Button>
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

export default RegisterInstitutePage;
