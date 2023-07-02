import { useState, useEffect } from "react";
import "../scss/Overview.scss";

function Overview(props) {


    return props.artic?  (
        <div className="overview-wrap" onClick={props.restOverview}>
            <div className="overview" key={props.artic.index}>
                <img src={props.artic.urlToImage}
                    fetchpriority="high" />

                <span className="title">
                    {props.artic.title}
                </span>

                <br />

                <span className="sub">
                {props.artic.uploaddate}
                </span>

                <br />

                <span>{props.artic.content}</span>
            </div>
        </div>
    ) : "";
};
export default Overview;