/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./styles.css";

const SinglePhoto = ({
    item,
    index,
    selectedItem,
    setSelectedItem,
    itemMoving,
}) => {
    const { listeners, setNodeRef, transform, transition } = useSortable({
        id: item.id,
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const handleChange = (e) => {
        const isSelected = e.target.checked;
        const value = Number(e.target.value);

        if (isSelected) {
            setSelectedItem([...selectedItem, value]);
        } else {
            setSelectedItem((prev) => prev.filter((id) => id != value));
        }
    };

    const [overCheckbox, setOverCheckbox] = useState(false);
    const clickCheckbox = (e) => {
        !overCheckbox && listeners.onMouseDown(e);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            onMouseDown={clickCheckbox}
            className={`relative group ${
                index === 0 ? "col-span-2 row-span-2" : ""
            } hover:scale-[0.99] duration-0 origin-top-left`}
        >
            <img
                src={item?.value}
                alt={`image-${index + 1}`}
                className="border-2 border-iron rounded-lg w-full h-full object-cover"
            />
            {!itemMoving && (
                <input
                    type="checkbox"
                    name={`checkbox-${index + 1}`}
                    id={`checkbox-${index}`}
                    value={item?.id}
                    checked={selectedItem.includes(item?.id)}
                    className={`absolute top-4 left-4 sm:top-5 sm:left-5 h-4 sm:h-5 w-4 sm:w-5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity z-10 isCheck`}
                    onChange={handleChange}
                    onMouseEnter={() => setOverCheckbox(true)}
                    onMouseLeave={() => setOverCheckbox(false)}
                />
            )}

            {!itemMoving && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-black bg-opacity-50 p-4 text-white text-center w-full h-full rounded-lg"></div>
                </div>
            )}
        </div>
    );
};

export default SinglePhoto;
