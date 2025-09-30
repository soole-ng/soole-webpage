import { Paperclip } from "lucide-react";
import React from "react";

const TechnicalSupportForm = () => {
  return (
    <section className="bg-[#77877E0D] py-20">
      <div
        style={{
          boxShadow: "7px 7px 2px 0px #0000000A",
        }}
        className="max-w-[900px] mx-auto bg-white rounded-lg "
      >
        <div className="flex justify-center items-center py-4  mb-6 border-b border-[#25373F4D]">
          <button className="px-4 md:px-12 py-2 bg-[#F7F8FB] font-medium  border-[#112B1D] border-[1.86px] rounded">
            Technical Support
          </button>
          <button className="px-4 md:px-12 py-2  text-[#0C1316]">
            Question
          </button>
        </div>
        <form>
          <div className="flex flex-col p-8 space-y-4">
            <div className="flex md:flex-row flex-col space-y-3 justify-between space-x-4">
              <div className="flex w-full flex-col mb-2 gap-4">
                <label className="text-[#25373F] geist-mono font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                />
              </div>
              <div className="flex w-full flex-col mb-2 gap-4">
                <label className="text-[#25373F] font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
              />
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D]"
              />
            </div>
            <div className="flex flex-col mb-2 gap-4">
              <label className="text-[#25373F] font-medium">Message</label>
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded-[10px] border-[#25373F4D] h-32"
                maxLength={5000}
              />
            </div>
            <div className="flex items-center space-x-4">
              <button type="button" className="px-4 py-2 flex gap-2 items-center text-sm text-[#112B1D] border-[#112B1D] border rounded">
                <Paperclip />
                Attach File
              </button>
            </div>
            {/* <div className="flex items-center space-x-4">
              <div className="w-24 h-12 bg-[#FFCA85] border-black border flex items-center justify-center">
                6wpQIE
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#25373F] font-medium">
                  Verification Code
                </label>
                <input
                  type="text"
                  placeholder="Enter the code above here:"
                  className="max-w-[300px] p-2 border rounded-[10px] border-[#25373F4D]"
                />
              </div>
            </div> */}
           <div className="flex w-full justify-end items-end">
             <button
              type="submit"
              className=" py-2 bg-[#112B1D] px-6 md:px-12  text-white w-fit rounded"
            >
              Submit
            </button>
           </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TechnicalSupportForm;
