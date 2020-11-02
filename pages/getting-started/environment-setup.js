import Container from "../../src/components/container";

const label = "Environment Setup";

const Content = () => {
  return (
    <div>
      <h1>{label}</h1>
      <p>Welcome to {label}</p>
    </div>
  );
};

function Page() {
  return <Container content={<Content />} label={label} />;
}

export default Page;
