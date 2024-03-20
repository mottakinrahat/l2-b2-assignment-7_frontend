const Title = ({ title }: { title: string }) => {
  return (
    <div className="font-bold text-4xl text-center py-10 lg:py-20">
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
