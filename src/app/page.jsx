import Button from "../components/btn";
import "./globals.css"
import '../tailwinds-modules/postions/origin.css' 

export default function App (){
  return (
    <div className="flex justify-center mt-11">
      <Button label="standard" variant="standard" extra="origin bg-red-400 w-32 h-10 justify-center items-center	 "/>
      <Button label="Parallel " variant="Parallel" extra="mb-12 justify-self-center	" />
      <Button label="circle " variant="circle" extra=" m-9	" />
      <Button label="oval " variant="oval" extra="" />

    </div>
  );
};