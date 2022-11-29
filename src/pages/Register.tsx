import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

function Register() {
  return (
    <Center w="full" pt="50px">
      <Box
        w={{ base: '300px', md: '400px' }}
        bg="gray.800"
        px={4}
        py={8}
        boxShadow="3px 3px 15px gray"
        border="1px solid"
        borderColor="gray.500"
        rounded="lg"
      >
        <form>
          <Stack gap={4}>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Center>
  );
}

export default Register;
