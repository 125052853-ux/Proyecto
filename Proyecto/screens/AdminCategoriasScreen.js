//Screen de admin categorias

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';
import Header from '../components/Header';
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function AdminCategoriesScreen() {
  const categories = [
    {
      id: '1',
      type: 'tech',
      name: 'Tecnología',
      description:
        'Habilidades relacionadas con programación, software, hardware y herramientas digitales.',
      skillsCount: '12 habilidades',
      pillBg: '#E0E7FF',
      pillColor: '#3730A3',
    },
    {
      id: '2',
      type: 'languages',
      name: 'Idiomas',
      description: 'Aprendizaje y práctica de idiomas extranjeros.',
      skillsCount: '10 habilidades',
      pillBg: '#DCFCE7',
      pillColor: '#166534',
    },
    {
      id: '3',
      type: 'design',
      name: 'Diseño',
      description:
        'Habilidades de diseño gráfico, diseño web y edición multimedia.',
      skillsCount: '8 habilidades',
      pillBg: '#FFEDD5',
      pillColor: '#9A3412',
    },
    {
      id: '4',
      type: 'education',
      name: 'Educación',
      description:
        'Conocimientos y habilidades en enseñanza y aprendizaje.',
      skillsCount: '6 habilidades',
      pillBg: '#EDE9FE',
      pillColor: '#6B21A8',
    },
    {
      id: '5',
      type: 'music',
      name: 'Música',
      description:
        'Habilidades musicales, instrumentos y producción de audio.',
      skillsCount: '5 habilidades',
      pillBg: '#FCE7F3',
      pillColor: '#9D174D',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Categorías"
        subtitle="Gestiona las categorías del sistema"
        showBack={true}
        rightComponent={
          <View style={globalStyles.adminProfilePill}>
            <Text style={{ marginRight: 4 }}>👤</Text>
            <Text style={globalStyles.adminProfileText}>Administrador ▾</Text>
          </View>
        }
      />

      {/* Cuerpo principal */}
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Tarjetas Estadísticas */}
          <View style={globalStyles.statsRow}>
            {/* Card 1: Categorías */}
            <View style={[globalStyles.statCard, globalStyles.statCardBlue]}>
              <Text style={{ fontSize: 24, marginBottom: 2 }}>📁</Text>
              <Text style={globalStyles.statNumber}>5</Text>
              <Text style={globalStyles.statLabel}>Categorías registradas</Text>
            </View>

            {/* Card 2: Habilidades */}
            <View style={[globalStyles.statCard, globalStyles.statCardGreen]}>
              <Text style={{ fontSize: 24, marginBottom: 2 }}>🧑</Text>
              <Text style={globalStyles.statNumber}>42</Text>
              <Text style={globalStyles.statLabel}>Habilidades en total</Text>
            </View>
          </View>

          {/* Fila Búsqueda + Botón Agregar Categoría */}
          <View style={styles.actionRow}>
            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar categoría..."
                placeholderTextColor={colors.textMuted}
              />
            </View>

            <TouchableOpacity
              style={styles.addCategoryButton}
              activeOpacity={0.8}
            >
              <Text style={styles.addCategoryPlus}>＋</Text>
              <Text style={styles.addCategoryText}>Agregar categoría</Text>
            </TouchableOpacity>
          </View>

          {/* Listado de Categorías */}
          {categories.map((cat) => (
            <View key={cat.id} style={styles.categoryCard}>
              <CategoryIcon type={cat.type} size={48} />

              <View style={styles.categoryInfo}>
                <View style={styles.categoryTitleRow}>
                  <Text style={styles.categoryName}>{cat.name}</Text>
                  <View
                    style={[
                      styles.skillsBadge,
                      { backgroundColor: cat.pillBg },
                    ]}
                  >
                    <Text
                      style={[
                        styles.skillsBadgeText,
                        { color: cat.pillColor },
                      ]}
                    >
                      {cat.skillsCount}
                    </Text>
                  </View>
                </View>

                <Text style={styles.categoryDesc}>{cat.description}</Text>
              </View>

              <TouchableOpacity style={styles.dotsButton}>
                <Text style={styles.dotsText}>⋮</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Navegación inferior Admin */}
      <BottomNav role="admin" activeTab="Categorias" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F6',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 44,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
  },
  addCategoryButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    height: 44,
    borderRadius: borderRadius.md,
  },
  addCategoryPlus: {
    color: colors.white,
    fontSize: 16,
    marginRight: 4,
    fontWeight: 'bold',
  },
  addCategoryText: {
    color: colors.white,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.semiBold,
  },
  categoryCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  categoryInfo: {
    flex: 1,
    marginLeft: spacing.md,
    marginRight: spacing.xs,
  },
  categoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  categoryName: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  skillsBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  skillsBadgeText: {
    fontSize: 11,
    fontWeight: typography.fontWeights.semiBold,
  },
  categoryDesc: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  dotsButton: {
    padding: 4,
  },
  dotsText: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
});
