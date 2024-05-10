"use client"
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [displayedFeatures, setDisplayedFeatures] = useState(featuresData.slice(0, 4));

  const handleLoadAll = () => {
    setShowAllFeatures(true);
    setDisplayedFeatures(featuresData);
  };

  const handleHideExtra = () => {
    setShowAllFeatures(false);
    setDisplayedFeatures(featuresData.slice(0, 4));
  };

  return (
    <>
      <section id="features" className="py-4">
        <div className="container">
          <SectionTitle
            title="TEE"
            center
          />
          <div className="grid grid-cols-1  gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {displayedFeatures.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          {!showAllFeatures ? (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleLoadAll}
                className="px-4 py-2 flex items-center justify-center animate-bounce"
              >
                 <FontAwesomeIcon icon={faArrowDown} className="h-7 mt-2"/>
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={handleHideExtra}
                className="px-4 py-2 flex items-center justify-center animate-bounce"
              >
                <FontAwesomeIcon icon={faArrowUp}  className="h-7 mt-2"/>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Features;
