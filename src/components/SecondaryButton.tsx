type buttonProps = {
  text: string;
  linkTo: string;
};

const SecondaryButton = ({ text, linkTo }: buttonProps) => {
  return (
    <div>
      <a
        className="btn btn-md text-white bg-[#00000000] w-[150px] border border-teal hover:border hover:border-teal hover:p__gradient hover:bg-[#9EAEFD10]"
        href={linkTo}
      >
        {text}
      </a>
    </div>
  );
};

export default SecondaryButton;
