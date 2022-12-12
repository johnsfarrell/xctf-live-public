import { Flex, HStack, Link, Button, Input, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  const [page, setPage] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1000;

  const handleHashChange = () => {
    const currentPage = window.location.hash.substring(1);
    setPage(currentPage);
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const DesktopComponent = () => {
    return (
      <Flex
        bg={"secondary.900"}
        px={"24px"}
        py={"16px"}
        h={"56px"}
        justifyContent={"center"}
      >
        <HStack
          spacing={8}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Link
            bgGradient="linear(to-tl, #050D21, #C98474, #050D21)"
            bgClip="text"
            fontSize="xl"
            fontWeight="extrabold"
            fontStyle={"italic"}
            w={"200px"}
            href={""}
          >
            XCTF.LIVE •
          </Link>
          <HStack as={"nav"} spacing={4}>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                backgroundColor: "secondary.800",
              }}
              href={"#"}
              color={page === "" ? "primary.400" : "grays.700"}
            >
              <FontAwesomeIcon icon={solid("house")} size={"lg"} />
            </Link>
            <Input
              w="300px"
              type="tel"
              placeholder="Search for a race..."
              _placeholder={{ color: "grays.100" }}
              color={"grays.100"}
              textAlign={"center"}
              rounded={"full"}
              border={"none"}
              backgroundColor={"secondary.700"}
              _hover={{
                backgroundColor: "secondary.600",
              }}
            />
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                backgroundColor: "secondary.800",
              }}
              href={"#ratings"}
              color={page === "ratings" ? "primary.400" : "grays.700"}
            >
              <FontAwesomeIcon icon={solid("person-running")} size={"lg"} />
            </Link>
          </HStack>
          <Box
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
            w={"200px"}
            pl="100px"
            alignContent={"end"}
          ></Box>
        </HStack>
      </Flex>
    );
  };

  const MobileComponent = () => {
    return (
      <Flex
        bg={"secondary.900"}
        px={"24px"}
        py={"16px"}
        h={"56px"}
        justifyContent={"center"}
      >
        <HStack as={"nav"} spacing={4} justifyContent={"center"}>
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              backgroundColor: "secondary.800",
            }}
            href={"#"}
            color={page === "" ? "primary.400" : "grays.700"}
          >
            <FontAwesomeIcon icon={solid("house")} size={"lg"} />
          </Link>
          <Input
            w="70%"
            type="tel"
            placeholder="Search for a race..."
            _placeholder={{ color: "grays.100" }}
            color={"grays.100"}
            textAlign={"center"}
            rounded={"full"}
            border={"none"}
            backgroundColor={"secondary.700"}
            _hover={{
              backgroundColor: "secondary.600",
            }}
          />
          <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              backgroundColor: "secondary.800",
            }}
            href={"#ratings"}
            color={page === "ratings" ? "primary.400" : "grays.700"}
          >
            <FontAwesomeIcon icon={solid("person-running")} size={"lg"} />
          </Link>
        </HStack>
      </Flex>
    );
  };

  return <>{width < breakpoint ? <MobileComponent /> : <DesktopComponent />}</>;
}
