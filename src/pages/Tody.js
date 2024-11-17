import React, { useState, useEffect } from "react";
import axios from "axios";
import InputText from "../components/InputText";
import Button from "../components/Button";
import ListDisplay from "../components/ListDisplay";

export default function Tody() {
    const [itemsList, setItemsList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/tasks")
            .then((response) => {
                setItemsList(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the tasks:", error);
            });
    }, []);

    const addItem = () => {
        if (inputText.trim() === "") {
            setError("Please enter something before adding!");
            return;
        }

        if (editIndex !== null) {
            const updatedItems = [...itemsList];
            updatedItems[editIndex] = { ...updatedItems[editIndex], name: inputText };
            setItemsList(updatedItems);

            axios
                .put(`http://127.0.0.1:8000/api/tasks/${itemsList[editIndex].id}`, {
                    name: inputText,
                })
                .then((response) => {
                    const updatedItems = [...itemsList];
                    updatedItems[editIndex] = response.data;
                    setItemsList(updatedItems);
                    setEditIndex(null);
                })
                .catch((error) => {
                    console.error("There was an error updating the task:", error);
                });
        } else {
            const newItem = { name: inputText };
            setItemsList([...itemsList, newItem]);

            axios
                .post("http://127.0.0.1:8000/api/tasks", { name: inputText })
                .then((response) => {
                    setItemsList([...itemsList, response.data]);
                })
                .catch((error) => {
                    console.error("There was an error adding the task:", error);
                });
        }

        setInputText("");
        setError("");
    };


    const deleteItem = (index) => {
        const itemToDelete = itemsList[index];

        axios
            .delete(`http://127.0.0.1:8000/api/tasks/${itemToDelete.id}`)
            .then(() => {
                const updatedItems = itemsList.filter((_, i) => i !== index);
                setItemsList(updatedItems);
            })
            .catch((error) => {
                console.error("There was an error deleting the task:", error);
            });
    };

    const editItem = (index) => {
        setInputText(itemsList[index].name);
        setEditIndex(index);
    };

    const deleteAll = () => {
        axios
            .delete("http://127.0.0.1:8000/api/tasks")
            .then(() => {
                setItemsList([]);
            })
            .catch((error) => {
                console.error("There was an error deleting all tasks:", error);
            });
    };

    return (
        <div className="flex items-start justify-center">
            <div>
                <div className="m-6">
                    <InputText inputText={inputText} setInputText={setInputText} />
                    {error && <p className="text-red-500">{error}</p>}
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
