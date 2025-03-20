import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { useState } from "react";

type ListLinksProps = {
  links: { name: string; url: string }[];
};

export function ListLinks(props: ListLinksProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { links } = props;

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        data={links}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <Link onDetailsPress={() => setIsModalOpen(true)} {...item} />
        )}
      />
      <Modal transparent visible={isModalOpen} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
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
            <Text style={styles.modalLinkName}>Google</Text>
            <Text style={styles.modalLinkUrl}>https://google.com</Text>
            <View style={styles.modalOptions}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
