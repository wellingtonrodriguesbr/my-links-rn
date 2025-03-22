import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { ListCategories } from "@/components/list-categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { colors } from "@/styles/colors";
import { styles } from "./styles";
import { useState } from "react";
import { saveLink } from "@/storage/link-storage";

import Toast from "react-native-toast-message";

export default function Add() {
  const [linkName, setLinkName] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleAddLink() {
    if (!selectedCategory.trim()) {
      Toast.show({
        type: "error",
        text1: "Selecione uma categoria",
      });
      return;
    } else if (!linkName.trim() || !linkUrl.trim()) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
      });
      return;
    }

    try {
      setLoading(true);
      await saveLink({
        id: String(new Date().getTime()),
        name: linkName,
        url: linkUrl,
        category: selectedCategory,
      });
      setLinkName("");
      setLinkUrl("");
      setSelectedCategory("");

      router.back();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possivel salvar o link",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo link</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <ListCategories
        selectedCategory={selectedCategory}
        onSelectedCategory={setSelectedCategory}
      />
      <View style={styles.form}>
        <Input
          placeholder="Nome"
          placeholderTextColor={colors.gray[400]}
          onChangeText={setLinkName}
        />
        <Input
          placeholder="URL"
          placeholderTextColor={colors.gray[400]}
          onChangeText={setLinkUrl}
        />
        <Button text="Adicionar" loading={loading} onPress={handleAddLink} />
      </View>
    </View>
  );
}
