import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

export function Like() {
  const [like, setLike] = useState(false);

  const handleChangeLike = () => {
    setLike(like ? false : true);
  };
  return (
    <Box mt="2">
      <FaRegHeart
        onClick={handleChangeLike}
        color={like ? "purple" : "gray"}
        fontSize="1.3rem"
      />
    </Box>
  );
}
