import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axiosInstance from "../axiosInstance";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register", {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      setError("Failed to sign up. Please try again.");
      console.error(err);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            required
          />
          <TextInput
            label="Email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            mt="md"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            mt="md"
            required
          />
          {error && (
            <Text color="red" mt="md">
              {error}
            </Text>
          )}
          <Group mt="md">
            <Checkbox label="I agree to the terms and conditions" required />
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
