import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "../styles/LogIn.module.css";

const SignUp = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account yet?{" "}
        <Anchor size="sm" component="button">
          <a href="/login">Log In</a>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Username" placeholder="Your username" required />
        <TextInput
          label="Email"
          placeholder="example@mail.com"
          mt="md"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
