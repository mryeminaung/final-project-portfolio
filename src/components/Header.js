import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
	{
		icon: faEnvelope,
		url: "mailto: hello@example.com",
	},
	{
		icon: faGithub,
		url: "https://github.com",
	},
	{
		icon: faLinkedin,
		url: "https://www.linkedin.com",
	},
	{
		icon: faMedium,
		url: "https://medium.com",
	},
	{
		icon: faStackOverflow,
		url: "https://stackoverflow.com",
	},
];

const Header = () => {
	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	const [preScroll, setPreScroll] = useState(0);
	const [isScrollingDown, setIsScrollingDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setPreScroll(window.scrollY);
			if (window.scrollY > preScroll) {
				setIsScrollingDown(true);
			} else {
				setIsScrollingDown(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [preScroll]);

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={999}
			transform={`translateY(${isScrollingDown ? "-200" : "0"}px)`}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack px={16} py={4} justifyContent="space-between" alignItems="center">
					<nav>
						<HStack spacing={5}>
							{socials.map((social) => {
								return (
									<a key={social.url} href={social.url} target="_blank">
										<FontAwesomeIcon icon={social.icon} size="2x" />
									</a>
								);
							})}
						</HStack>
					</nav>
					<nav>
						<HStack spacing={8}>
							<a href="/#projects" onClick={handleClick("projects")}>
								Projects
							</a>
							<a href="/#contactme" onClick={handleClick("contactme")}>
								Contact Me
							</a>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};
export default Header;
