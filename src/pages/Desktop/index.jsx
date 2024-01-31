import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const DesktopPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start overflow-auto w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
              <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full">
                <div className="flex sm:flex-1 flex-row sm:gap-10 gap-[74px] items-center justify-start w-auto sm:w-full">
                  <Img
                    className="common-pointer h-[35px] w-[35px]"
                    src="images/img_close.svg"
                    alt="close"
                    onClick={() => navigate(-1)}
                  />
                  <ul className="flex sm:flex-col flex-row gap-14 sm:hidden items-center justify-end w-auto common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-800"
                      >
                        <Text size="txtInterMedium16">Features</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-800"
                      >
                        <Text size="txtInterMedium16">Pricing</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-800"
                      >
                        <Text size="txtInterMedium16">Enterprise</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-800"
                      >
                        <Text size="txtInterMedium16">Careers</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row gap-14 items-center justify-end w-auto">
                  <Text
                    className="text-base text-blue_gray-800 w-auto"
                    size="txtInterMedium16"
                  >
                    <span className="text-blue_gray-800 font-inter text-left font-medium">
                      Open an
                    </span>
                    <span className="text-blue_gray-800 font-inter text-left font-medium">
                      {" "}
                      Account
                    </span>
                  </Text>
                  <div className="flex flex-row gap-3 items-center justify-end w-auto">
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-800 w-auto"
                    >
                      <Text size="txtInterMedium16">Sign In</Text>
                    </a>
                  </div>
                </div>
              </header>
              <div className="flex flex-col gap-6 items-center justify-start mt-11 md:px-5 w-auto md:w-full">
                <Text
                  className="leading-[72.00px] max-w-[846px] md:max-w-full md:text-5xl text-[64px] text-center text-gray-900"
                  size="txtInterSemiBold64"
                >
                  Start monitoring your website like a pro
                </Text>
                <Text
                  className="leading-[28.00px] max-w-[846px] md:max-w-full text-blue_gray-800 text-center text-lg"
                  size="txtInterRegular18"
                >
                  <>
                    Get a bird&#39;s eye view with our customizable dashboard.
                    Stay on top of things! Revamp your work process with our
                    game-changing feature. Boost productivity and efficiency!
                  </>
                </Text>
                <div className="flex flex-row gap-10 items-center justify-center w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[160px] rounded text-center text-lg"
                    color="deep_purple_A400"
                    size="md"
                  >
                    Try for free
                  </Button>
                  <div className="flex flex-row gap-3 items-center justify-center w-auto">
                    <Text
                      className="text-deep_purple-A400 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      View Pricing
                    </Text>
                    <Img
                      className="rounded-[50%] w-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[740px] h-[946px] mt-[60px] md:px-5 relative w-full">
                <div className="absolute bottom-[0] md:h-[538px] h-[653px] inset-x-[0] mx-auto w-full">
                  <div className="absolute bottom-[0] h-[538px] inset-x-[0] mx-auto w-full">
                    <Img
                      className="h-[538px] m-auto object-contain w-full"
                      src="images/img_gradient.png"
                      alt="gradient"
                    />
                    <div className="absolute bottom-[15%] flex md:flex-col flex-row md:gap-10 gap-[72px] inset-x-[0] items-center justify-start max-w-7xl mx-auto w-full">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtInterRegular18WhiteA700"
                      >
                        Trusted by these companies
                      </Text>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Img
                          className="h-[62px] w-[103px]"
                          src="images/img_google_white_a700.svg"
                          alt="google"
                        />
                        <Img
                          className="h-[62px] w-[133px]"
                          src="images/img_slack.svg"
                          alt="slack"
                        />
                        <Img
                          className="h-[62px] w-[178px]"
                          src="images/img_trustpilot.svg"
                          alt="trustpilot"
                        />
                        <Img
                          className="h-16 w-[70px]"
                          src="images/img_cnnlogo.svg"
                          alt="cnnlogo"
                        />
                        <Img
                          className="h-16 w-[92px]"
                          src="images/img_clutch.svg"
                          alt="clutch"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[509px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_gradient2.png"
                    alt="gradientTwo"
                  />
                </div>
                <div className="absolute md:h-[680px] h-[738px] inset-x-[0] mx-auto top-[0] w-4/5 md:w-full">
                  <div className="absolute h-[680px] left-[0] top-[0] w-[84%] md:w-full">
                    <Img
                      className="h-[680px] m-auto object-contain rounded-[16px] w-full"
                      src="images/img_desktoplight.png"
                      alt="desktoplight"
                    />
                    <div className="absolute bg-white-A700_a2 h-14 left-[1%] top-[1%] w-14"></div>
                  </div>
                  <div className="absolute bottom-[0] h-[585px] right-[0] w-[24%]">
                    <Img
                      className="h-[585px] m-auto object-contain rounded-[16px] w-full"
                      src="images/img_mobiledark.png"
                      alt="mobiledark"
                    />
                    {/* <div className="absolute bg-gray-900_87 h-[45px] left-[2%] top-[1%] w-[45px]"></div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-start justify-start md:px-10 px-20 sm:px-5 py-[120px] w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-7xl mx-auto w-full">
                <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[628px] md:pr-10 pr-14 sm:pr-5 py-14 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-lg text-light_blue-A700 w-full"
                      size="txtInterMedium18LightblueA700"
                    >
                      Sales Monitoring
                    </Text>
                    <Text
                      className="leading-[58.00px] max-w-[572px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtInterMedium42"
                    >
                      Simplify your sales monitoring
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[572px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      <>
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&#39;s eye view
                        with our customizable dashboard.{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark_One"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Consectetur adipiscing elit
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Two"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Sed do eiusmod tempor incididunt ut labore{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center py-6 w-auto">
                    <a
                      href="javascript:"
                      className="text-lg text-light_blue-A700 w-auto"
                    >
                      <Text size="txtInterMedium18LightblueA700">
                        Learn More
                      </Text>
                    </a>
                    <Img
                      className="rounded-[50%] w-7"
                      src="images/img_arrowleft_blue_50.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                </div>
                <div className="bg-blue-50 md:h-[556px] h-[628px] md:pl-10 sm:pl-5 pl-[69px] pt-[69px] relative rounded-[16px] w-[628px] md:w-full">
                  <div className="absolute bottom-[0] h-[556px] right-[0] w-[84%] sm:w-full">
                    <div className="h-[556px] m-auto w-full">
                      <Img
                        className="h-[556px] m-auto object-cover rounded-[16px] w-full"
                        src="images/img_desktoplight_556x524.png"
                        alt="desktoplight_One"
                      />
                      <div className="absolute bg-white-A700 h-[118px] right-[0] top-[22%] w-[69%]"></div>
                    </div>
                    <div className="absolute bg-gradient1  flex flex-col gap-[39.51px] items-start justify-start pb-[12.57px] pt-[14.37px] px-[14.37px] right-[5%] rounded-[3px] shadow-bs top-[17%] w-[236px]">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="sm:text-[33.71px] md:text-[35.71px] text-[37.71px] text-white-A700 w-auto"
                          size="txtInterMedium3771"
                        >
                          108k
                        </Text>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[57px]"
                          rightIcon={
                            <Img
                              className="h-3.5 ml-px"
                              src="images/img_arrowup.svg"
                              alt="Arrow-Up"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                        >
                          <div className="!text-pink-900 font-medium text-[10.78px] text-left">
                            50k
                          </div>
                        </Button>
                      </div>
                      <Text
                        className="text-[14.37px] text-white-A700 w-auto"
                        size="txtInterMedium1437"
                      >
                        Revenue
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-gradient2  flex flex-col gap-11 items-start justify-end left-[13%] px-4 py-[15px] rounded shadow-bs1 top-[11%] w-[263px]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-auto"
                        size="txtInterMedium42WhiteA700"
                      >
                        50k
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[63px] rounded-[14px]"
                        rightIcon={
                          <Img
                            className="h-4 ml-0.5"
                            src="images/img_arrowup_light_blue_900.svg"
                            alt="Arrow-Up"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                      >
                        <div className="!text-light_blue-900 font-medium text-left text-xs">
                          10k
                        </div>
                      </Button>
                    </div>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterMedium16WhiteA700"
                    >
                      Orders
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-7xl mx-auto w-full">
                <div className="bg-green-50 md:h-[517px] h-[628px] pb-[75px] md:px-10 sm:px-5 px-[75px] relative rounded-[16px] w-[628px] md:w-full">
                  <div className="absolute h-[517px] inset-x-[0] mx-auto top-[0] w-[59%] sm:w-full">
                    <Img
                      className="h-[517px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_mobilelight.png"
                      alt="mobilelight"
                    />
                    <div className="absolute bg-white-A700_7f h-[398px] inset-x-[0] mx-auto top-[0] w-full"></div>
                  </div>
                  <div className="absolute bg-gradient3  flex flex-col gap-[10.66px] h-[200px] md:h-auto inset-x-[0] items-start justify-end mx-auto pb-[18.66px] pt-[21.32px] sm:px-5 px-[21.32px] rounded-[5px] shadow-bs2 top-[15%] w-[477px] sm:w-full">
                    <div className="flex flex-row h-full items-start justify-between w-full">
                      <Text
                        className="sm:text-[41.98px] md:text-[47.98px] text-[55.98px] text-white-A700 w-auto"
                        size="txtInterMedium5598"
                      >
                        10
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[65px] rounded-[18px]"
                        rightIcon={
                          <Img
                            className="h-[21px] ml-0.5"
                            src="images/img_arrowdown.svg"
                            alt="Arrow-Down"
                          />
                        }
                        color="white_A700"
                        size="sm"
                      >
                        <div className="!text-red-900 font-medium text-[15.99px] text-left">
                          5
                        </div>
                      </Button>
                    </div>
                    <Text
                      className="sm:text-[17.32px] md:text-[19.32px] text-[21.32px] text-white-A700 w-auto"
                      size="txtInterMedium2132"
                    >
                      Inquiries
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[628px] md:pl-10 pl-14 sm:pl-5 py-14 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-green-A700 text-lg w-full"
                      size="txtInterMedium18GreenA700"
                    >
                      Customer Support
                    </Text>
                    <Text
                      className="leading-[58.00px] max-w-[572px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtInterMedium42"
                    >
                      Get in touch with your customers
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[572px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      <>
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&#39;s eye view
                        with our customizable dashboard.{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Three"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Lorem ipsum dolor sit amet
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Four"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Consectetur adipiscing elit
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark_Five"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtInterRegular18"
                      >
                        Sed do eiusmod tempor incididunt ut labore{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center py-6 w-auto">
                    <a
                      href="javascript:"
                      className="text-green-A700 text-lg w-auto"
                    >
                      <Text size="txtInterMedium18GreenA700">Learn More</Text>
                    </a>
                    <Img
                      className="rounded-[50%] w-7"
                      src="images/img_arrowleft_green_50.svg"
                      alt="arrowleft_Two"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-7xl mx-auto w-full">
                <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[628px] md:pr-10 pr-14 sm:pr-5 py-14 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-lg text-pink-400_01 w-full"
                      size="txtInterMedium18Pink40001"
                    >
                      Growth Monitoring
                    </Text>
                    <Text
                      className="leading-[58.00px] max-w-[572px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtInterMedium42"
                    >
                      Monitor your site’s new subscribers{" "}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[572px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      <>
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&#39;s eye view
                        with our customizable dashboard.{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start pt-4 w-full">
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                        size="txtInterMedium32"
                      >
                        100+
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-lg w-full"
                        size="txtInterRegular18Bluegray500"
                      >
                        Lorem ipsum dolor sit
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                        size="txtInterMedium32"
                      >
                        800+
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-lg w-full"
                        size="txtInterRegular18Bluegray500"
                      >
                        Conse adipiscing elit
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center py-8 w-auto">
                    <a
                      href="javascript:"
                      className="text-lg text-pink-400_01 w-auto"
                    >
                      <Text size="txtInterMedium18Pink40001">Learn More</Text>
                    </a>
                    <Img
                      className="rounded-[50%] w-7"
                      src="images/img_arrowleft_red_50.svg"
                      alt="arrowleft_Three"
                    />
                  </div>
                </div>
                <div className="bg-red-50 md:h-[524px] h-[628px] pt-[86px] md:px-10 sm:px-5 px-[86px] relative w-[628px] md:w-full">
                  <div className="absolute bottom-[0] h-[524px] inset-x-[0] mx-auto w-[59%] sm:w-full">
                    <Img
                      className="h-[524px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_mobiledark_524x370.png"
                      alt="mobiledark_One"
                    />
                    <div className="absolute bg-gray-900_87 h-[51px] left-[4%] top-[2%] w-[51px]"></div>
                    <div className="absolute bg-gray-900_7f h-[239px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="absolute bg-gradient4  flex flex-col gap-[11.08px] md:h-auto h-max inset-y-[0] items-start justify-between left-[14%] my-auto pb-[19.38px] pt-[22.15px] px-[16.62px] rounded-[5px] w-[238px]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="sm:text-[29.229999999999997px] md:text-[31.229999999999997px] text-[33.23px] text-white-A700 w-auto"
                        size="txtInterMedium3323"
                      >
                        12k
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[77px] rounded-[18px]"
                        rightIcon={
                          <Img
                            className="h-4 ml-0.5 my-0.5"
                            src="images/img_arrowup_deep_purple_900.svg"
                            alt="Arrow-Up"
                          />
                        }
                        color="white_A700"
                        size="sm"
                      >
                        <div className="!text-deep_purple-900 font-medium text-[16.62px] text-left">
                          100
                        </div>
                      </Button>
                    </div>
                    <Text
                      className="text-[19.38px] text-white-A700 w-auto"
                      size="txtInterMedium1938"
                    >
                      Subscribers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[1086px] h-[1092px] md:h-[1384px] max-w-[1710px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto p-20 md:px-10 sm:px-5 w-[85%] md:w-full">
              <div className="flex flex-col items-center justify-start max-w-7xl mb-[786px] mt-4 w-full">
                <div className="flex flex-col gap-4 items-center justify-end max-w-[680px] w-full">
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 w-auto"
                    size="txtInterMedium42"
                  >
                    Testimonials
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[680px] md:max-w-full text-blue_gray-800 text-center text-lg"
                    size="txtInterRegular18"
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur ma. Ut enim ad minim
                    veniam, quis nostrud exercitation.{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Lucy Tarr
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            CEO of AB.co
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-12 w-12"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam? Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image_64x64.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Grant Styles
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            CEO of Biffco Enterprises Ltd.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[10px] w-12"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="light_blue_400_blue_A400"
                      >
                        <Img src="images/img_music.svg" alt="music" />
                      </Button>
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet? Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image_1.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Annette Black
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            Manager at Barone LLC.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[11px] w-12"
                        shape="round"
                        color="blue_A400_01"
                      >
                        <Img src="images/img_facebook.svg" alt="facebook" />
                      </Button>
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Consectetur adipiscing elit duis tristique sollicitudin.
                      Vel risus commodo viverra maecenas accumsan. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image_2.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Robert Fox
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            CEO of Biffco Enterprises Ltd.
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-12 w-12"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet? Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image_3.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Ralph Edwards
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            Director at Acme.co
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[11px] w-12"
                        shape="round"
                        color="black_900"
                        size="sm"
                      >
                        <Img
                          className="h-[26px]"
                          src="images/img_close_white_a700.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Convallis a cras semper auctor neque. Fringilla est
                      ullamcorper eget nulla facilisi etiam dignissim. Aliquam
                      porta nisl dolor, molestie pellentesque elit molestie in.
                      Morbi metus neque, elementum ullam.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-4 items-start justify-center sm:px-5 px-6 py-[25px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_image_64x64.png"
                          alt="image"
                        />
                        <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Grant Styles
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500 w-auto"
                            size="txtInterRegular16"
                          >
                            CEO of Biffco Enterprises Ltd.
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[10px] w-12"
                        shape="round"
                        size="sm"
                        variant="gradient"
                        color="light_blue_400_blue_A400"
                      >
                        <Img src="images/img_music.svg" alt="music" />
                      </Button>
                    </div>
                    <Text
                      className="leading-[28.00px] max-w-[471px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet? Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start pb-[60px] pt-[120px] md:px-10 px-20 sm:px-5 w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:pr-10 pr-14 sm:pr-5 py-8 w-[519px] sm:w-full">
                <Text
                  className="text-base text-pink-400_01 w-full"
                  size="txtInterMedium16Pink40001"
                >
                  Frequently Asked Questions
                </Text>
                <Text
                  className="leading-[58.00px] max-w-[463px] md:max-w-full sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                  size="txtInterMedium42"
                >
                  Let’s clarify some of your questions
                </Text>
                <Text
                  className="leading-[28.00px] max-w-[463px] md:max-w-full text-blue_gray-800 text-lg"
                  size="txtInterRegular18"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center max-w-[737px] w-full">
                <div className="bg-blue-50 flex md:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18Gray900"
                    >
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam?
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[649px] md:max-w-full text-blue_gray-800 text-lg"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet.
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_minus.svg"
                    alt="minus"
                  />
                </div>
                <div className="bg-blue-50 flex md:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="flex-1 leading-[24.00px] max-w-[649px] md:max-w-full text-gray-900 text-lg"
                    size="txtInterMedium18Gray900"
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
                <div className="bg-blue-50 flex sm:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="flex-1 text-gray-900 text-lg w-auto"
                    size="txtInterMedium18Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus_One"
                  />
                </div>
                <div className="bg-blue-50 flex md:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="flex-1 text-gray-900 text-lg w-auto"
                    size="txtInterMedium18Gray900"
                  >
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus_Two"
                  />
                </div>
                <div className="bg-blue-50 flex sm:flex-col flex-row gap-4 items-center justify-between p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18Gray900"
                  >
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus_Three"
                  />
                </div>
                <div className="bg-blue-50 flex md:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="flex-1 leading-[24.00px] max-w-[649px] md:max-w-full text-gray-900 text-lg"
                    size="txtInterMedium18Gray900"
                  >
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus_Four"
                  />
                </div>
                <div className="bg-blue-50 flex sm:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                  <Text
                    className="flex-1 text-gray-900 text-lg w-auto"
                    size="txtInterMedium18Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_plus.svg"
                    alt="plus_Five"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start pb-[120px] pt-[60px] md:px-10 px-20 sm:px-5 w-auto md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-auto"
                  size="txtInterMedium42"
                >
                  Flexible plans for you
                </Text>
                <Text
                  className="text-blue_gray-800 text-center text-lg w-auto"
                  size="txtInterRegular18"
                >
                  No hidden fees!
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-7xl mx-auto w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-50 flex flex-col gap-8 h-[490px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-lg w-[411px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-deep_purple-A400 text-xl w-full"
                        size="txtInterMedium20"
                      >
                        Free Trial
                      </Text>
                      <Text
                        className="text-blue_gray-800 text-lg w-full"
                        size="txtInterRegular18"
                      >
                        Perfect for testing the waters
                      </Text>
                    </div>
                    <div className="flex flex-row gap-0.5 items-start justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                        size="txtInterMedium32"
                      >
                        $0
                      </Text>
                      <Text
                        className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-500 w-auto"
                        size="txtInterMedium32Bluegray500"
                      >
                        /mo
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 h-full items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="flex-1 text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <Text
                          className="flex-1 text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Sed do eiusmod tempor incididunt
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <Text
                          className="flex-1 text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Consectetur adipiscing elit
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium rounded text-base text-center w-full"
                      color="white_A700"
                      size="md"
                    >
                      Start Trial
                    </Button>
                  </div>
                  <div className="bg-deep_purple-A400 flex flex-col gap-8 items-start justify-start p-6 sm:px-5 rounded-lg w-[410px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtInterMedium20WhiteA700"
                      >
                        Business
                      </Text>
                      <Text
                        className="text-gray-100 text-lg w-full"
                        size="txtInterRegular18Gray100"
                      >
                        Perfect for small businesses
                      </Text>
                    </div>
                    <div className="flex flex-row gap-0.5 items-start justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtInterMedium32WhiteA700"
                      >
                        $500
                      </Text>
                      <Text
                        className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                        size="txtInterMedium32Gray100"
                      >
                        /mo
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_100.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="flex-1 text-base text-gray-100 w-auto"
                          size="txtInterRegular16Gray100"
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_100.svg"
                          alt="checkmark_One"
                        />
                        <Text
                          className="flex-1 text-base text-gray-100 w-auto"
                          size="txtInterRegular16Gray100"
                        >
                          Consectetur adipiscing elit
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_100.svg"
                          alt="checkmark_Two"
                        />
                        <Text
                          className="flex-1 text-base text-gray-100 w-auto"
                          size="txtInterRegular16Gray100"
                        >
                          Sed do eiusmod tempor incididunt{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_100.svg"
                          alt="checkmark_Three"
                        />
                        <Text
                          className="flex-1 text-base text-gray-100 w-auto"
                          size="txtInterRegular16Gray100"
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_100.svg"
                          alt="checkmark_Four"
                        />
                        <Text
                          className="flex-1 text-base text-gray-100 w-auto"
                          size="txtInterRegular16Gray100"
                        >
                          Consectetur adipiscing elit
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium rounded text-base text-center w-full"
                      color="white_A700"
                      size="md"
                    >
                      Get Started
                    </Button>
                  </div>
                </List>
                <div className="bg-gray-50 flex sm:flex-1 flex-col gap-8 h-[490px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-lg w-[411px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-deep_purple-A400 text-xl w-full"
                      size="txtInterMedium20"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-lg w-full"
                      size="txtInterRegular18"
                    >
                      Perfect for big companies
                    </Text>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-full"
                    size="txtInterMedium32"
                  >
                    Custom
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-800"
                    size="txtInterRegular16Bluegray800"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore. <br />
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-medium rounded text-base text-center w-full"
                    color="white_A700"
                    size="md"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start max-w-7xl mx-auto md:px-5 rounded-[16px] w-full">
              <div className="flex h-[492px] md:h-[532px] justify-end relative rounded-[16px] w-full">
                <Img
                  className="h-[532px] mt-auto mx-auto object-cover w-full"
                  src="images/img_gradient_532x1280.png"
                  alt="gradient_One"
                />
                <div className="absolute h-[494px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[494px] m-auto object-cover w-full"
                    src="images/img_gradient2_494x1280.png"
                    alt="gradientTwo_One"
                  />
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-1/2">
                    <Text
                      className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-full"
                      size="txtInterMedium56"
                    >
                      Monitor your website like a pro
                    </Text>
                    <Text
                      className="mt-[53px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Join over 800+ happy site owners boosting productivity and
                      efficiency!
                    </Text>
                    <div className="flex flex-row gap-10 items-center justify-center mt-14 w-auto">
                      <Button
                        className="!text-pink-400_01 cursor-pointer font-medium min-w-[160px] rounded text-center text-lg"
                        color="white_A700"
                        size="md"
                      >
                        Try for free
                      </Button>
                      <div className="flex flex-row gap-3 items-center justify-center w-auto">
                        <Text
                          className="text-center text-lg text-white-A700 w-auto"
                          size="txtInterMedium18WhiteA700"
                        >
                          Contact Sales
                        </Text>
                        <Img
                          className="rounded-[50%] w-[26px]"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrowleft_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[104px] items-start justify-start pb-14 pt-[120px] md:px-10 px-20 sm:px-5 w-full md:w-full">
              <div className="flex flex-col items-center justify-between max-w-7xl mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-7xl w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[35px] w-[35px]"
                        src="images/img_close.svg"
                        alt="close_One"
                      />
                      <Text
                        className="text-[17px] text-blue_gray-800"
                        size="txtInterBold17"
                      >
                        YOUR SITE
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-8 items-start justify-center">
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Features
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Growth
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Sales
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Chat
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-center">
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Pricing
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Free Trial
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Standard
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Business
                        </Text>
                      </div>
                    </List>
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-8 items-start justify-center w-[194px]">
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Enterprise
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Personalize
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Automation
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Invoicing
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          24/7 Support
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-start justify-center w-[193px]">
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterRegular16Bluegray800"
                        >
                          Careers
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Open Positions
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Part-Time
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Contractual
                        </Text>
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Contact Us
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-7xl mx-auto w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterMedium16Bluegray500"
                >
                  © Copyright 2024. Your Site. All rights reserved.
                </Text>
                <div className="flex flex-row gap-14 items-start justify-start w-auto">
                  <Img
                    className="h-5 w-[19px]"
                    src="images/img_x.svg"
                    alt="x"
                  />
                  <Img
                    className="h-5 w-5"
                    src="images/img_facebook_blue_gray_500.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-5 w-5"
                    src="images/img_feed.svg"
                    alt="feed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
