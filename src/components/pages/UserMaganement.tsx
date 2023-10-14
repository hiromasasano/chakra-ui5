/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { memo, VFC, useEffect } from "react";

import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal>
        <ModalOverlay />
        <ModalContent />
      </Modal>
    </>
  );
});
