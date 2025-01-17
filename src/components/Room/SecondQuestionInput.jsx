import { ReactTyped } from "react-typed";

export default function SecondQuestionInput({ secondSubmitedValue }) {
  return (
    <div className="border flex border-tertiary bg-[#F3F3F3] rounded-[10px] p-[20px] mt-[10px] mb-[30px]">
      <p>TOP </p>
      <ReactTyped strings={[secondSubmitedValue]} typeSpeed={40} />
    </div>
  );
}
