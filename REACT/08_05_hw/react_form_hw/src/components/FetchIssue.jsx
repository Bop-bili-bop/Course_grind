import emojiSadIcon from '../assets/emoji-sad.svg' 

const FetchIssue = () => {
  return (
    <div className="flex flex-col text-center items-center h-screen justify-center px-4">
      <div className="mb-6">
        <div className="flex justify-center items-center w-16 h-16 rounded-full shadow-md mx-auto">
            <img className='w-8 h-8 fill-indigo-500' src={emojiSadIcon} alt="" />
        </div>
      </div>
      <h2 className="text-2xl font-medium mb-2">Unexpected error</h2>
      <p className="mb-2 w-2xs">
        We're facing some issues at the moment. Please try again later or
        contact support at
      </p>
      <a href="mailto:support@codepulse.com" className="text-indigo-500 ">
        support@codepulse.com
      </a>
    </div>
  );
};

export default FetchIssue;
