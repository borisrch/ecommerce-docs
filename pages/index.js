import Container from "../src/components/container";

const Content = () => {
  return (
    <div>
      <p>Home Page</p>
    </div>
  );
};

function Index() {
  return <Container content={<Content />} />;
}

export default Index;
