import { useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { LinkStorage, removeLink } from "@/storage/link-storage";

import Toast from "react-native-toast-message";

type ListLinksProps = {
  links: LinkStorage[];
};

export function ListLinks(props: ListLinksProps) {
  const { links } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage>(
    {} as LinkStorage
  );

  function handleLinkDetails(link: LinkStorage) {
    setSelectedLink(link);
    setIsModalOpen(true);
  }

  async function handleRemoveLink() {
    try {
      Alert.alert("Remover link", "Deseja realmente remover esse link?", [
        {
          style: "cancel",
          text: "Não",
        },
        {
          text: "Sim",
          onPress: async () => await removeLink(selectedLink.id),
        },
      ]);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível remover o link",
      });
      console.log(error);
    } finally {
      setIsModalOpen(false);
    }
  }

  async function handleOpenLink() {
    try {
      await Linking.openURL(selectedLink.url);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Não foi possível abrir o link",
      });
      console.log(error);
    } finally {
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link onDetailsPress={() => handleLinkDetails(item)} {...item} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Você ainda não possui nenhum link cadastrado.
          </Text>
        )}
      />

      <Modal transparent visible={isModalOpen} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink.category}</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsModalOpen(false)}
              >
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>{selectedLink.name}</Text>
            <Text style={styles.modalLinkUrl}>{selectedLink.url}</Text>
            <View style={styles.modalOptions}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={handleRemoveLink}
              />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
