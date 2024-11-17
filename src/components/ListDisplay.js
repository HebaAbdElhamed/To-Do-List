import Button from "./Button";

export default function ListDisplay({ itemsList, deleteItem, editItem }) {
    const itemDisplayMap = itemsList.map((item, index) => {
        return (
            <li key={index} className='flex items-center justify-between p-2 m-2 font-bold border-b-2 text-l'>
                {item.name} {/* عرض الـ name من الـ API */}
                <div>
                    <Button className="p-2 ml-2 text-sm font-normal bg-green-500 hover:bg-green-700"
                        onClick={() => editItem(index)}>
                        Edit
                    </Button>
                    <Button className="p-2 ml-2 text-sm font-normal bg-red-500 hover:bg-red-700"
                        onClick={() => deleteItem(index)}>
                        Delete</Button>
                </div>
            </li>
        );
    });

    return (
        <ul>
            {itemDisplayMap}
        </ul>
    );
}
