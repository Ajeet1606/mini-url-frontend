import { useState } from "react";
import { URL } from "../routes/IPConfig";
import { epochToHumanReadable } from "../utils/utils";

interface visitsHistory {
  totalClicks: number;
  timeline: {
    timestamp: number;
    _id: string;
  }[];
}
const VisitsHistory = () => {
  const [link, setLink] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [visitsData, setVisitsData] = useState<visitsHistory>({
    totalClicks: -1,
    timeline: [],
  });

  console.log(visitsData);

  const handleLinkInput = (e: any) => {
    setLink(e?.target.value);
    setShowErrorMessage(false);
    setVisitsData({
      totalClicks: -1,
      timeline: [],
    });
  };

  const handleGetShortLink = async () => {
    if (link.length == 0) {
      setShowErrorMessage(true);
      return;
    }
    console.log(link, URL);

    const shortId = link.split(".app/")[1];
    console.log(shortId);

    try {
      const response = await fetch(`${URL}/analytics/${shortId}`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response data
      const data = await response.json();

      setVisitsData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="trackUrl"
      className={`w-full bg-[#f5f5f5] ${
        visitsData.totalClicks == -1 ? "h-[60vh]" : "h-[100vh]"
      } flex justify-center items-center font-montserrat`}
    >
      <div className="w-[90%] bg-white h-4/5 border rounded-2xl p-5 flex flex-col justify-around">
        <h3 className="text-base md:text-2xl font-extrabold">
          Track The Visits On Your Link
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-lg">Enter the shortened URL</p>
          <input
            className="w-full h-10 md:h-14 p-4 border rounded-lg focus-within:border-red-500 focus-visible:border-red-500"
            type="text"
            placeholder="https://miniurl.up.railway.com/abcd"
            onChange={(e) => handleLinkInput(e)}
          />
          <span
            className={`text-red-500 ${
              link.trim().length == 0 && showErrorMessage ? "block" : "hidden"
            }`}
          >
            Please provide a valid link
          </span>
        </div>

        <button
          className="bg-red-500 text-white font-bold py-3 md:py-4 px-4 rounded md:w-48"
          onClick={handleGetShortLink}
        >
          Get Visits
        </button>

        <p
          className={
            visitsData.totalClicks === -1
              ? "hidden"
              : "text-center text-sm md:text-lg block"
          }
        >
          Your link was visited:{" "}
          <span className="text-red-500">{visitsData.totalClicks} time(s)</span>
        </p>

        <div className={visitsData.timeline.length === 0 ? "hidden" : ""}>
          <p className="text-center text-sm md:text-lg font-semibold mb-3">
            TimeLine Of Visits
          </p>
          <div className="p-5">
            <table className="min-w-full shadow-md border rounded">
              <thead className="bg-white shadow-md">
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-red-500 text-left">
                    Serial No.
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-red-500 text-left">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="mt-3">
                {visitsData.timeline.map((item, index: number) => (
                  <tr className={`${index % 2 ? "bg-slate-100" : ""}`}>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {index + 1}.
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {epochToHumanReadable(item.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsHistory;
