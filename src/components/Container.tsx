import React, { type ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    id?: string;
    className?: string;
    bgClassName?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "", bgClassName = "", id }) => {
    return (
        <div className={`${bgClassName} dark:bg-gray-700`} id={id}>
            <div className={`w-full lg:w-[75vw] mx-auto px-2 sm:px-4 py-6 sm:py-8 ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Container;