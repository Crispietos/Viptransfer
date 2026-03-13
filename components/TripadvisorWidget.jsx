"use client";
import React, { useEffect } from "react";

export default function TripadvisorWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.jscache.com/wejs?wtype=cdswritereviewlgvi&uniq=144&locationId=28986643&lang=en_UK&display_version=2";
    script.async = true;
    script.onload = () => (script.loadtrk = true);
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section pt-40 pb-40">
      <div className="container-sub text-center">
        <h3 className="text-xl font-bold mb-6">Leave a Review on TripAdvisor</h3>
        <div id="TA_cdswritereviewlgvi144" className="TA_cdswritereviewlgvi">
          <ul id="VvNeoA" className="TA_links Cennim">
            <li id="mBvm8I" className="D2aKOi">
              <a target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.co.uk/">
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                  alt="TripAdvisor"
                  width={200}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}