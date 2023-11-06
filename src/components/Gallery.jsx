/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
    DndContext,
    MouseSensor,
    DragOverlay,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import blankImage from "../assets/images/image-loader-icon.png";
import SinglePhoto from "./SinglePhoto";

const Gallery = ({ items, setItems, selectedItem, setSelectedItem }) => {
    const [activeItem, setActiveItem] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor));
    const [itemMoving, setItemMoving] = useState(false);

    const handleDragStart = (e) => {
        setItemMoving(true);
        const draggableItem = items.find((item) => e.active.id == item.id);
        setActiveItem(draggableItem);
    };

    const handleDragEnd = (e) => {
        setItemMoving(false);
        const { active, over } = e;

        if (active.id !== over?.id) {
            setItems((items) => {
                const x = items.find((item) => active.id == item.id);
                const y = items.find((item) => over.id == item.id);
                const oldIndex = items.indexOf(x);
                const newIndex = items.indexOf(y);
                const result = arrayMove(items, oldIndex, newIndex);
                return result;
            });
        }

        setActiveItem(null);
    };

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-10">
                    {items.map((item, index) => (
                        <SinglePhoto
                            key={item?.id}
                            item={item}
                            index={index}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            itemMoving={itemMoving}
                        />
                    ))}
                    <div
                        className={`border-[2px] border-iron border-dashed rounded-lg flex flex-col items-center justify-center ${
                            items.length <= 1 && "min-h-40 min-w-40"
                        } p-5`}
                    >
                        <img
                            src={blankImage}
                            alt=""
                            className="h-[20px] w-[20px]"
                        />
                        <h1 className="text-[10px] sm:text-[12px] md:text-16 font-semibold mt-3">
                            Add Image
                        </h1>
                    </div>
                </div>
            </SortableContext>
            <DragOverlay adjustScale={true}>
                {activeItem ? (
                    <img
                        src={activeItem?.value}
                        alt={`image-`}
                        className="border-2 border-iron rounded-lg w-full h-full object-cover"
                    />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

export default Gallery;
