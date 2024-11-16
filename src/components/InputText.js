export default function InputText({ inputText, setInputText }){
    return (
        <input
            className="placeholder:italic placeholder:text-slate-500  bg-white border border-slate-300 rounded-md p-4 px-16 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Add your tody"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
    );
}