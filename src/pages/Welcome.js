import { useNavigate } from "react-router-dom";
;
export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center text-5xl h-96 '>
            <h2 className='font-bold text-blue-700'>Lets Start!</h2>
            <button onClick={() => navigate('/tody')} className="p-4 text-3xl m-6 text-white bg-blue-700 rounded hover:shadow-2xl shadow-blue-800">Go to Tody</button>
        </div>
    );
}