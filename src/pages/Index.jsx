import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Box mb={8}>
            <Image src="https://via.placeholder.com/800x400" alt="Main headline" />
            <Heading as="h2" size="xl" mt={4}>Main Headline Article</Heading>
            <Text mt={2}>This is a brief description of the main headline article. It provides a summary of the news content.</Text>
          </Box>
          <Divider />
          <VStack spacing={4} mt={8} align="stretch">
            <Box>
              <Heading as="h3" size="md">Smaller Article 1</Heading>
              <Text mt={2}>Brief description of the smaller article.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Smaller Article 2</Heading>
              <Text mt={2}>Brief description of the smaller article.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">Smaller Article 3</Heading>
              <Text mt={2}>Brief description of the smaller article.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box mb={8}>
            <Heading as="h3" size="lg">Trending News</Heading>
            <VStack spacing={4} mt={4} align="stretch">
              <Box>
                <Heading as="h4" size="sm">Trending Article 1</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">Trending Article 2</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
              <Box>
                <Heading as="h4" size="sm">Trending Article 3</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
            </VStack>
          </Box>
          <Divider />
          <Box mt={8}>
            <Heading as="h3" size="lg">Market Data</Heading>
            <Text mt={4}>Market data content goes here.</Text>
          </Box>
          <Divider />
          <Box mt={8}>
            <Heading as="h3" size="lg">Advertisements</Heading>
            <Text mt={4}>Advertisement content goes here.</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;