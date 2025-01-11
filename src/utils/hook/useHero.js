import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../api/getHero";


export function useHero() {
    return useQuery({
      queryKey: ['post'],
      queryFn: () => getHero(),
    })
  }