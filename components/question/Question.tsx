"use client";
import { IQuestion } from "@/utils/types";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { animated, useTransition } from "@react-spring/web";
import React, { useState } from "react";

interface Props {
  question: IQuestion;
  withId: boolean;
  checkEnabled: boolean;
  getAnswer?: (answer: boolean) => void;
}
const Question = ({ question, withId, checkEnabled, getAnswer }: Props) => {
  const [answer, setAnswer] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  const transitions = useTransition(isAnswered, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
    config: {
      duration: 200,
    },
  });
  return (
    <div
      className={`bg-bg-light_gray rounded-xl shadow p-4 border-4 border-t-8 ${
        isAnswered
          ? isTrue
            ? "border-green"
            : "border-red"
          : "border-transparent"
      } `}
    >
      <div className="text-gray text-xl mb-4">
        {(withId ? question.id + ") " : "") + question.text}
      </div>

      {question.options.map((option) => (
        <label
          key={option.id}
          htmlFor={`option_${question.id}_${option.id}`}
          onClick={() => {
            setAnswer(option.id);
            setIsAnswered(false);
            if (getAnswer) {
              getAnswer(question.answer === answer);
            }
          }}
          className="flex justify-start items-center space-x-4 text-gray bg-white shadow-sm rounded-lg my-2 px-4 py-2 border-2 duration-200 border-transparent hover:border-blue cursor-pointer"
        >
          {isAnswered &&
            (isTrue ? (
              option.id === question.answer ? (
                <CheckCircleIcon className={`w-6 h-6 stroke-rate`} />
              ) : (
                <></>
              )
            ) : option.id === question.answer ? (
              <CheckCircleIcon className={`w-6 h-6 stroke-rate`} />
            ) : (
              <XCircleIcon className={`w-6 h-6 stroke-raspberry`} />
            ))}

          <input
            id={`option_${question.id}_${option.id}`}
            type={"radio"}
            name={`question_${question.id}`}
          />
          <span className={"w-full"}>{option.text}</span>
        </label>
      ))}

      {checkEnabled &&
        transitions(
          (styles, item) =>
            answer > 0 &&
            !item && (
              <animated.div style={{ overflow: "hidden", ...styles }}>
                <div
                  onClick={() => {
                    setIsAnswered(true);
                    setIsTrue(question.answer === answer);
                  }}
                  className="bg-blue p-2 text-white rounded text-center shadow hover:bg-blue duration-200 cursor-pointer"
                >
                  답변을 확인하세요.
                </div>
              </animated.div>
            )
        )}
    </div>
  );
};

export default Question;
