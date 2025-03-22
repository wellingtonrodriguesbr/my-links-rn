import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const LINKS_STORAGE_KEY = "my-links-storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

export async function getLinks(): Promise<LinkStorage[]> {
  try {
    const links = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
    return links ? JSON.parse(links) : [];
  } catch (error) {
    throw error;
  }
}

export async function saveLink(link: LinkStorage) {
  try {
    const links = await getLinks();
    links.push(link);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(links));
    Toast.show({
      type: "success",
      text1: "Link salvo com sucesso",
    });
  } catch (error) {
    throw error;
  }
}

export async function removeLink(id: string) {
  try {
    const links = await getLinks();
    const filteredLinks = links.filter((link) => link.id !== id);
    await AsyncStorage.setItem(
      LINKS_STORAGE_KEY,
      JSON.stringify(filteredLinks)
    );

    Toast.show({
      type: "success",
      text1: "Link removido com sucesso",
    });
  } catch (error) {
    throw error;
  }
}
