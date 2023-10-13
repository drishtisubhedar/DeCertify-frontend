import React from "react";

import { Button, Img, Text } from "components";

const CertificatePage = () => {
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
        <div className="absolute font-inter h-[832px] inset-[0] justify-center m-auto max-w-[1237px] md:px-5 w-full">
          <Img
            className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] rotate-[-90deg] w-1/5"
            src="images/img_shadow_1.png"
            alt="shadow"
          />
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
          <div className="absolute flex flex-col md:gap-10 gap-[87px] justify-start left-[0] top-[23%] w-[81%]">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[17px] w-[70%] md:w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-[65px] text-transparent"
                size="txtMontserratRomanMedium65"
              >
                Certificate{" "}
              </Text>
              <Text
                className="md:mt-0 mt-[42px] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                size="txtInterMedium24"
              >
                issuance date :10 Oct, 2023
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col justify-start">
                <Text
                  className="md:ml-[0] ml-[26px] text-[15px] text-deep_purple-50"
                  size="txtInterMedium15"
                >
                  Student Name
                </Text>
                <Text
                  className="border-b-2 border-deep_purple-50 border-solid mt-1 pl-[26px] pr-[35px] sm:px-5 py-[11px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-50"
                  size="txtInterMedium30"
                >
                  Nandan Pathak
                </Text>
              </div>
              <div className="flex flex-col justify-start">
                <Text
                  className="md:ml-[0] ml-[26px] text-[15px] text-deep_purple-50"
                  size="txtInterMedium15"
                >
                  Course Name
                </Text>
                <Text
                  className="border-b-2 border-deep_purple-50 border-solid mt-1 pb-2 pl-[26px] pr-[35px] pt-3.5 sm:px-5 rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-50"
                  size="txtInterMedium30"
                >
                  Computer Science
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[32%] flex flex-col gap-[5px] justify-start left-[0]">
            <Text
              className="md:ml-[0] ml-[26px] text-[15px] text-deep_purple-50"
              size="txtInterMedium15"
            >
              Institute{" "}
            </Text>
            <Text
              className="border-b-2 border-deep_purple-50 border-solid pl-[26px] pr-[35px] sm:px-5 py-[11px] rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-50"
              size="txtInterMedium30"
            >
              ITM(SLS)BU
            </Text>
          </div>
          <Img
            className="absolute bottom-[0] h-[314px] object-cover right-[0]"
            src="images/img_group7.png"
            alt="groupSeven"
          />
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
