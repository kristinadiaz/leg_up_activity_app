import React from "react";
import RenderYogaActivity from "./RenderYogaActivity";

export default function PrepYogaTable({ activityHash, askToDelete }) {
  const yogaSessions = [];

  if (activityHash.length) {
    activityHash.forEach((activity) => {
      if (activity.name === "yoga") {
        yogaSessions.push(activity);
      }
    });

    const table = yogaSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.yoga_type}</td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
          <td>
            <button onClick={(e) => askToDelete(e, a)}>Delete activity</button>
          </td>
        </tr>
      );
    });
    return <RenderYogaActivity table={table} />;
  } else {
    return null;
  }
}
