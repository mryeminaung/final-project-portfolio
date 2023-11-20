import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	return (
		<VStack rounded={10} bg="white" textColor="black" overflow="hidden">
			<Image
				width="full"
				src={imageSrc}
				roundedBottomLeft={10}
				roundedBottomRight={10}
				alt={title}
			/>
			<VStack paddingY={3} paddingX={6} align="left" spacing={3}>
				<Heading as="h4" size="md">
					{title}
				</Heading>
				<Text fontSize="lg" color="blackAlpha.700">
					{description}
				</Text>
				<HStack>
					<Text fontSize="md">See more</Text>
					<FontAwesomeIcon icon={faArrowRight} size="1x" />
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Card;
