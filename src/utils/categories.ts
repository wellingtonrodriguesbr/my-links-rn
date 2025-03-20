import { MaterialIcons } from "@expo/vector-icons";

export type CategoryType = {
  id: string;
  categoryName: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: CategoryType[] = [
  { id: "1", categoryName: "Curso", icon: "code" },
  { id: "2", categoryName: "Projeto", icon: "folder" },
  { id: "3", categoryName: "Site", icon: "language" },
  { id: "4", categoryName: "Artigo", icon: "newspaper" },
  { id: "5", categoryName: "Vídeo", icon: "movie" },
  { id: "6", categoryName: "Documentação", icon: "content-paste" },
];
