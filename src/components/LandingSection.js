import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365"
	>
		<VStack spacing={16}>
			<VStack spacing={4}>
				<Avatar
					size="2xl"
					name="Segun Adebayo"
					src="https://i.pravatar.cc/150?img=7"
				/>
				<Heading as="h4" size="sm">
					{greeting}
				</Heading>
			</VStack>
			<VStack spacing={5}>
				<Heading as="h2" size="2xl">
					{bio1}
				</Heading>
				<Heading as="h2" size="2xl">
					{bio2}
				</Heading>
			</VStack>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
