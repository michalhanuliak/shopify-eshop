"use server";

import { fetchCollections } from "@/services/collections";

export async function getAllCollections(first: number = 10) {
  return fetchCollections(first);
}
