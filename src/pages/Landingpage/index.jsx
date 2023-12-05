import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LandingpagePage = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultBalance, setDefaultAccount] = useState(null);

  const ConnectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChanged([result[0]])
        })
    } else {
      setErrorMessage('Install Metamask')
    }
  }

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName)
  }

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-montserrat items-center justify-start mx-auto sm:pl-5 pl-[27px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1253px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[133px] justify-start md:mt-0 mt-[58px] w-[57%] md:w-full">
            <div className="flex flex-row gap-[7px] items-start justify-end p-1 w-[43%] md:w-full">
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
            <div className="flex flex-col md:gap-10 gap-[66px] items-start justify-start md:ml-[0] ml-[33px] w-[96%] md:w-full">
              <div className="h-[201px] relative w-full">
                <Text
                  className="bg-clip-text bg-gradient  leading-[123.52%] m-auto sm:text-[37px] md:text-[43px] text-[51px] text-transparent"
                  size="txtMontserratRomanMedium51"
                >
                  <span className="text-deep_purple-A100 font-montserrat text-left font-medium">
                    <>
                      Your Blockchain Powered <br />
                      Certificate Ecosystem
                      <br />
                    </>
                  </span>
                  <span className="text-deep_purple-A100 font-montserrat text-left font-medium">
                    Verify Issue{" "}
                  </span>
                </Text>
                <div className="absolute bg-purple-A700 bottom-[13%] h-[13px] left-[24%] rounded-md w-[13px]"></div>
              </div>
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row font-inter gap-[34px] items-center justify-between w-full">
                    <Button
                      className="common-pointer !text-purple-900 cursor-pointer font-medium min-w-[288px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                      onClick={() => navigate("/issuecertificate")}
                      color="purple_200"
                      size="sm"
                      variant="fill"
                    >
                      {" "}
                      Issue Certificates
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-medium min-w-[288px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                      onClick={() => navigate("/verifycertificate")}
                      color="purple_200"
                      size="sm"
                      variant="fill"
                    >
                      {" "}
                      Verify Certificates
                    </Button>
                  </div>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer font-medium font-montserrat min-w-[376px] sm:min-w-full ml-1 md:ml-[0] text-[19px] text-center"
                    onClick={() => navigate("/registerinstitute")}
                    color="gray_600"
                    size="xs"
                    variant="underline"
                  >
                    New Here? Register Your Institute Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="font-inter h-[832px] relative w-[34%] md:w-full">
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] rotate-[-90deg] w-[59%]"
              src="images/img_shadow.png"
              alt="shadow"
            />
            <Button
              className="cursor-pointer flex inset-x-[0] items-center justify-center min-w-[318px] mx-auto top-[7%]"
              onClick={ConnectWallet}

              shape="round"
              color="purple_A700"
              size="sm"
              variant="outline"
            >
              <div className="font-medium leading-[normal] text-left text-xl">
                Connect Your Wallet
              </div>
            </Button>
            <Img
              className="absolute bottom-[19%] h-[469px] left-[0]"
              src="images/img_shapes.svg"
              alt="shapes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
