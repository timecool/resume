import React from "react";
import TimelineBox from "./TimelineBox";
import { timelineData } from "../data/projects";
import Container from "./Container";

const Timeline: React.FC = () => {
    return (
        <Container id="projekte">
            <h2>Projekte</h2>
            <div className="relative mx-auto not-even:py-8 hidden md:block">
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300" />
                <ul className="space-y-12">
                    {timelineData.map((item, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <li
                                key={idx}
                                className="grid grid-cols-[1fr_auto_1fr] items-center"
                            >
                                {isLeft ? (
                                    <TimelineBox data={item} />
                                ) : (
                                    <div className="text-gray-500 text-sm mt-2">
                                        <div className="float-right dark:text-white">{item.date}</div>
                                    </div>
                                )}
                                <div className="flex flex-col items-center z-40 min-w-[48px]">
                                    <span className="block w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow dark:bg-gray-500" />
                                </div>
                                {!isLeft ? (
                                    <TimelineBox data={item} />
                                ) : (
                                    <div className="text-gray-500 text-sm mt-2 dark:text-white">{item.date}</div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="block md:hidden">
                <ul className="space-y-8">
                    {timelineData.map((item, idx) => (
                        <li key={idx}>
                            <TimelineBox data={item} showDate />
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Timeline;