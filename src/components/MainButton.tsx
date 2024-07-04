type buttonProps = {
  text: string;
  linkTo: string;
};

const MainButton = ({ text, linkTo }: buttonProps) => {
  return (
    <div>
      <a
        className="btn btn-md text-white pb__gradient w-[150px] border border-teal hover:border hover:border-teal"
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

export default MainButton;
