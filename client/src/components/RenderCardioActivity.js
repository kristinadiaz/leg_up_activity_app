import React from "react"

export default function RenderCardioActivity({ table }) {
    return (
        <table className="records">
        <tbody>
            <td><b><em>Cardio workout</em></b></td>
            <td>Type of workout</td>
            <td>Distance (miles)</td>
            <td>Time (minutes)</td>
          {table}
        </tbody>
      </table>
    )
}