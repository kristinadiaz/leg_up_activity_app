import React from "react"

export default function RenderActivities({ table }) {
    return (
        <table className="records">
        <tbody>
            <td><em>Meditation Session</em></td>
            <td>Length of activity</td>
            <td>Personal notes</td>
          {table}
        </tbody>
      </table>
    )
}