import React from "react";
import ReactApexChart from "react-apexcharts";

const ScoreCard = () => {
  const seriesData = [80, 90];
  const labelsData = [
    "Professionalism",
    "Business Acumen",
   
  ];
  const seriesDat1 = [ 65, 85];
  const labelsData2 = [
    "Opportunistic",
    "Closing Technique",
  ];

  const renderRadialBars = () => {
    return seriesData.map((value, index) => {
      
      const options = {
        chart: {
          height: 120,
          width: 120, 
          type: "radialBar",
        },
        series: [value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                formatter: function (val) {
                  return val + "%";
                },
                fontSize: "20px",
                show: true,
                fontWeight:'bold',
                alignItems:'center'
              },
              
            },

            
          },
          
        },
        labels: [labelsData[index]],
      };

      return (
        <div key={index} className="m-2">
          <ReactApexChart
            options={options}
            series={[value]}
            type="radialBar"
            height={120}
            width={120}
            
          />
          <div className="text-center mt-[5px] text-[12px] font-bold">
            {labelsData[index]}
          </div>
        </div>
      );
    });
  };
  const renderRadialBars1 = () => {
    return seriesDat1.map((value, index) => {
      const options = {
        chart: {
          height: 120, // Adjust as needed
          width: 120, // Adjust as needed
          type: "radialBar",
        },
        series: [value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                formatter: function (val) {
                  return val + "%";
                },
                fontSize: "20px",
                show: true,
                 fontWeight:'bold',
                alignItems:'center'
              },
            },
          },
        },
        labels: [labelsData[index]],
      };

      return (
        <div key={index} className="m-2">
          <ReactApexChart
            options={options}
            series={[value]}
            type="radialBar"
            height={120}
            width={120}
        
          />
         
          <div className="text-center mt-[5px] text-[12px] font-bold">
            {labelsData2[index]}
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className="flex flex-col"
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     flexWrap: "wrap",
    //     maxWidth: "500px",
    //   }}
    >
        <div className="flex w-full justify-between gap-10">
            {renderRadialBars()}
        </div>
      <div className="flex w-full gap-10">

          {renderRadialBars1()}
      </div>
    
    </div>
  );
};
export default ScoreCard;
