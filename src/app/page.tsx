// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, SimpleGrid } from "@chakra-ui/react";

export default function Page() {
  return (
    <SimpleGrid columns={3} spacing={10} bg='grey'>
      <Button variant="primary">Let’s work together</Button>
      <Button variant="secondary">Let’s work together </Button>
    </SimpleGrid>
  );
}
