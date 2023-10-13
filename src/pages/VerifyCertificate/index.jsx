import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const VerifyCertificatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-montserrat items-center justify-start mx-auto sm:pl-5 pl-[27px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1253px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[165px] justify-start md:mt-0 mt-[58px] w-3/5 md:w-full">
            <div className="flex flex-row gap-[7px] items-start justify-end p-1 w-[41%] md:w-full">
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
            <div className="flex flex-col items-start justify-start ml-8 md:ml-[0] w-[96%] md:w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[65px] text-transparent"
                size="txtMontserratRomanMedium65"
              >
                Verify Your Certificate{" "}
              </Text>
              <Input
                name="inputfield"
                placeholder="Enter Your Number"
                className="font-inter font-medium md:text-[27px] p-0 placeholder:text-deep_purple-50_b2 sm:text-[25px] text-[29px] text-left w-full"
                wrapClassName="mt-[72px] pl-[9px] w-4/5"
                type="number"
                color="deep_purple_50"
                size="xs"
                variant="underline"
              ></Input>
              <Button
                className="common-pointer cursor-pointer font-inter font-medium min-w-[200px] mt-[38px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/certificate")}
                color="purple_200"
                size="sm"
                variant="fill"
              >
                {" "}
                Verify{" "}
              </Button>
            </div>
          </div>
          <div className="font-inter h-[832px] relative w-[31%] md:w-full">
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] rotate-[-90deg] w-[65%]"
              src="images/img_shadow_832x245.png"
              alt="shadow"
            />
            <Button
              className="cursor-pointer flex items-center justify-center left-[0] min-w-[318px] top-[7%]"
              rightIcon={
                <div className="h-[46px] ml-[11px] pt-[13px] pb-3.5 pl-[11px] pr-2.5 w-[46px] bg-deep_purple-A100 left-[3%] absolute rounded-[50%]">
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
      </div>
    </>
  );
};

export default VerifyCertificatePage;
