import { Center, Container, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <Container size="md" style={{ height: "100vh" }}>
      <Center style={{ height: "100%" }}>
        <Loader size="lg" variant="dots" color="blue" />
      </Center>
    </Container>
  );
};

export default Loading;
