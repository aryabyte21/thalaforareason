import React from "react";
import { Box, Text, Container, Heading, VStack } from "@chakra-ui/react";

function About() {
	return (
		<Container maxW="container.md" p={4}>
			<VStack spacing={5} align="stretch">
				<Heading as="h1" size="xl" textAlign="center" color="teal.500">
					Welcome to "ThalaForAReason"
				</Heading>
				<Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
					<Text fontSize="lg">
						A unique platform where fun meets philanthropy! For just ₹7, you can
						unlock a world of exciting games. But there's more to it than just
						entertainment. Every rupee you spend here helps feed the needy. By
						playing games on our website, you're not just enjoying yourself;
						you're contributing to a noble cause. Your small contribution can
						make a big difference in someone's life.
					</Text>
				</Box>
				<Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
					<Text fontSize="lg">
						Join us in this joyous journey of gaming for good. Let's spread
						smiles and make a change, one game at a time. Play, enjoy, and be
						the reason for someone's meal today!
					</Text>
				</Box>
			</VStack>
		</Container>
	);
}

export default About;





