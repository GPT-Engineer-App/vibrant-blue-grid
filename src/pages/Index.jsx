import { Box, Flex, Heading, Text, Button, Image, Grid, GridItem, Link, VStack, useColorModeValue, Icon, Container } from "@chakra-ui/react";
import { FaRegNewspaper, FaRocket, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("blue.500", "blue.200");

  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" padding={4} justifyContent="space-between" alignItems="center" background="blue.600" color="white">
        <Heading size="md">Warp News</Heading>
        <Box>
          <Link marginRight={4}>Home</Link>
          <Link marginRight={4}>About</Link>
          <Link marginRight={4}>Products</Link>
          <Link marginRight={4}>Contact</Link>
        </Box>
      </Flex>

      {/* Header */}
      <Flex direction="column" align="center" justify="center" paddingY={8} bg={bg}>
        <Heading size="2xl" marginBottom={4} color={color}>
          Explore the Future with Warp News
        </Heading>
        <Text fontSize="xl" marginBottom={8}>
          Stay updated with the latest trends in technology and innovation.
        </Text>
        <Button leftIcon={<Icon as={FaRocket} />} colorScheme="blue">
          Subscribe Now
        </Button>
      </Flex>

      {/* Featured News Section */}
      <Container maxW="container.xl" paddingY={8}>
        <Heading size="lg" marginBottom={4} color={color}>
          Featured Stories
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {Array.from({ length: 3 }).map((_, index) => (
            <GridItem key={`article-${index}`}>
              <Box boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eXNjYXBlfGVufDB8fHx8MTcxMDAwMTc0NXww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box padding={4}>
                  <Heading size="md">The Future of Urban Living</Heading>
                  <Text marginTop={2}>Discover how cities could evolve with the advent of new technologies.</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <VStack spacing={4} paddingY={8} bg={bg} align="center">
        <Heading size="lg" color={color}>
          About Us
        </Heading>
        <Text textAlign="center" maxWidth="container.md">
          Warp News is dedicated to highlighting the progressive advances in science and technology that will shape our future.
        </Text>
      </VStack>

      {/* Contact Section */}
      <Flex justify="space-evenly" paddingY={8} bg={bg} wrap="wrap">
        <VStack spacing={4}>
          <Heading size="lg" color={color}>
            Get in Touch
          </Heading>
          <Text>Contact us and join the optimistic view of the future.</Text>
          <Button leftIcon={<FaEnvelope />} colorScheme="blue">
            Contact Us
          </Button>
        </VStack>
        <VStack spacing={4}>
          <Heading size="lg" color={color}>
            Follow Us
          </Heading>
          <Flex>
            <Link href="#" marginRight={2}>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="#" marginRight={2}>
              <Icon as={FaFacebookF} w={6} h={6} />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedinIn} w={6} h={6} />
            </Link>
          </Flex>
        </VStack>
      </Flex>

      {/* Footer */}
      <Flex as="footer" padding={4} justifyContent="center" alignItems="center" background="blue.600" color="white">
        <Text>&copy; {new Date().getFullYear()} Warp News. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
