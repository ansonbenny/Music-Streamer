import React from "react";
import { Dots, Play } from "../../assets";
import "./style.scss";

const Collections = ({ data }) => {
  return (
    <div className="collections">
      <table>
        <tbody>
          {data?.map((obj, key) => {
            return (
              <tr key={key}>
                <td>
                  <span className="count grey">{key + 1}</span>
                  <button className="Play">
                    <Play width={"16px"} height={"16px"} />
                  </button>
                </td>
                <td>
                  <img src={obj?.thumbnail} alt={obj?.title} />
                </td>
                <td>
                  <div className="flex-md">
                    <p className="medium">{obj?.extract}</p>
                    <p className="grey medium-device">{obj?.genres?.[0]}</p>
                  </div>
                </td>
                <td className="desktop">
                  <p className="grey">{obj?.genres?.[0]}</p>
                </td>
                <td>4:30</td>
                <td>
                  <button className="more">
                    <Dots width={"16px"} height={"16px"} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;
