export default function Button({ children, className, onClick }){
    return (
      <button onClick={onClick}
      className={` text-white  rounded ${className}`} >
      {children}
      </button>
      );
  }