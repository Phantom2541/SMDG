import React from "react";
import { useSelector } from "react-redux";

export default function SyllabusGenerator({ handleClick, selectedBoard }) {
  const { collections } = useSelector(({ subjects }) => subjects);

  const parseSyllabus = () => {
    const tableBody = new Array(13).fill().map((_, index) => {
      let indicator = "specialization",
        size = undefined;

      if (index < 6) {
        indicator = "core";
        if (index === 0) size = 6;
      } else if (index < 9) {
        indicator = "contextualized";
        if (index === 6) size = 3;
      } else {
        if (index === 9) size = 4;
      }

      return {
        indicator,
        size,
        first: {},
        second: {},
      };
    });

    for (const subject of collections) {
      const { position, semester } = subject;

      const numberTxt = { 1: "first", 2: "second" };

      tableBody[position] = {
        ...tableBody[position],
        [numberTxt[semester]]: subject,
      };
    }

    return tableBody;
  };

  return (
    <tbody>
      {parseSyllabus().map((data, index) => {
        const { first, second, indicator, size } = data;

        const subjectCol = (x, y, subject) => {
          const boardId = `${indicator}/${x}-${y}`;
          return (
            <td
              onClick={() => handleClick(subject, boardId)}
              className={`cursor-pointer text-left ${
                selectedBoard === boardId && "bg-primary text-white"
              }`}
            >
              {subject?.title}
            </td>
          );
        };

        return (
          <tr key={index}>
            {size && (
              <td
                rowSpan={size}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  fontWeight: "bold",
                  width: "20px",
                  textTransform: "uppercase",
                }}
              >
                {indicator} SUBJECTS
              </td>
            )}
            {subjectCol(1, index, first)}
            {subjectCol(2, index, second)}
          </tr>
        );
      })}
    </tbody>
  );
}
