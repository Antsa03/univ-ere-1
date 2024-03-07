import { useRouter } from "next/navigation";

export const navigate = (path: string) => {
  const router = useRouter();
  return router.push(path);
};
