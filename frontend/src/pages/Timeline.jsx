import { useState } from "react";
import { Chrono } from "react-chrono";
export default function Timeline() {
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data).timeline;

  const items = parsedData.map((item) => {
    const actions = item.actions;
    const formattedActions = actions
      .map((action, index) => {
        return `Action ${index + 1}:\n  - Action: ${index + 1}\n - Action: ${
          action.action
        }\n  - Deadline: ${action.deadline}\n  - Details: ${action.details}`;
      })
      .join("\n\n");
    return {
      title: item.semester,
      cardTitle: "Actions to take",
      url: item.imageUrl,
      cardDetailedText: formattedActions,
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    };
  });
  // {
  //   title: "May 1940",
  // cardTitle: "Dunkirk",
  // url: "http://www.history.com",
  // cardSubtitle:
  //   "Men of the British Expeditionary Force (BEF) wade out to..",
  // cardDetailedText:
  //   "Men of the British Expeditionary Force (BEF) wade out to..",
  // media: {
  //   type: "IMAGE",
  //   source: {
  //     url: "http://someurl/image.jpg",
  //   },
  // },
  // },

  return (
    <div>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      {parsedData[0].semester}
    </div>
  );
}
