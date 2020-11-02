import Container from "../../src/components/container";

const label = "Adding Products";

const Content = () => {
  return (
    <div>
      <h1>Adding Products</h1>
      <p>Welcome to Adding Products</p>
    </div>
  );
};

function Page() {
  return <Container content={<Content />} label={label} />;
}

export default Page;
