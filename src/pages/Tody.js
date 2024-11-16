import React, { useState } from "react";
import InputText from "../components/InputText";
import Button from "../components/Button";
import ListDisplay from "../components/ListDisplay";
export default function Tody() {
    const [itemsList, setItemsList] = useState([
        "Do my English Homework",
        "Study Math",
    ]);

    const [inputText, setInputText] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [error, setError] = useState("");

    const addItem = () => {
        if (inputText.trim() === "") {
            setError("Please enter something before adding!");
            return;
        }

        if (editIndex !== null) {
            const updatedItems = [...itemsList];
            updatedItems[editIndex] = inputText;
            setItemsList(updatedItems);
            setEditIndex(null);
        } else {
            setItemsList([...itemsList, inputText]);
        }

        setInputText("");
        setError("");
    };

    const deleteItem = (index) => {
        const updatedItems = itemsList.filter((_, i) => i !== index);
        setItemsList(updatedItems);
    };


    const editItem = (index) => {
        setInputText(itemsList[index]);
        setEditIndex(index);
    };

    const deleteAll = () => {
        setItemsList([]);
    };
    return (
        <div className="flex items-start justify-center">
            <div>
                <div className="m-6">
                    <InputText inputText={inputText} setInputText={setInputText} />
                    {error && <p className="text-red-500">{error}</p>}{" "}
                    <Button
                        className="p-4 m-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-800"
                        onClick={addItem}
                    >
                        {editIndex === null ? "Add Me" : "Update Item"}
                    </Button>
                </div>
                <div className="items-start m-6">
                    <ListDisplay
                        itemsList={itemsList}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                    <Button
                        className="px-40 py-4 m-2 font-bold text-white bg-orange-300 rounded hover:bg-orange-600"
                        onClick={deleteAll}
                    >
                        Delete All
                    </Button>
                </div>
            </div>
        </div>
    );
}
