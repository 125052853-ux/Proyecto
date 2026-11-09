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
import Badge from '../components/Badge';
import BottomNav from '../components/BottomNav';

export default function AdminUsersScreen() {
  const usersList = [
    {
      id: '1',
      name: 'Antonio Ramirez',
      email: 'antonio.Ramirez@gmail.com',
      role: 'Administrador',
      status: 'Activo',
      avatarBg: '#E0E7FF',
    },
    {
      id: '2',
      name: 'Aaron Cuenca',
      email: 'Aaron.Cuenca@email.com',
      role: 'Participante',
      status: 'Activo',
      avatarBg: '#DCFCE7',
    },
    {
      id: '3',
      name: 'Jorge Barrera',
      email: 'Jorge.Barrera@email.com',
      role: 'Participante',
      status: 'Inactivo',
      avatarBg: '#FFEDD5',
    },
    {
      id: '4',
      name: 'Leonardo Suarez',
      email: 'leonardo.Suarez@email.com',
      role: 'Participante',
      status: 'Activo',
      avatarBg: '#EDE9FE',
    },
  
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Usuarios"
        subtitle="Gestiona los usuarios del sistema"
        showBack={true}
        rightComponent={
          <View style={globalStyles.adminProfilePill}>
            <Text style={{ marginRight: 4 }}></Text>
            <Text style={globalStyles.adminProfileText}>Administrador ▾</Text>
          </View>
        }
      />

      {/* Contenido en fondo gris suave */}
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Tarjetas Estadísticas */}
          <View style={globalStyles.statsRow}>
            {/* Card 1: Registrados */}
            <View style={[globalStyles.statCard, globalStyles.statCardBlue]}>
              <View style={styles.statIconBadge}>
                <Text style={{ fontSize: 22 }}>👥</Text>
              </View>
              <Text style={globalStyles.statNumber}>4</Text>
              <Text style={globalStyles.statLabel}>Usuarios registrados</Text>
              <Text style={globalStyles.statSubLabel}>1 Administradores</Text>
              <Text style={globalStyles.statSubLabel}>3 Participantes</Text>
            </View>

            {/* Card 2: Activos */}
            <View style={[globalStyles.statCard, globalStyles.statCardGreen]}>
              <View style={styles.statIconBadge}>
                <Text style={{ fontSize: 22 }}>👤</Text>
              </View>
              <Text style={globalStyles.statNumber}>3</Text>
              <Text style={globalStyles.statLabel}>Usuarios activos</Text>
              <Text style={globalStyles.statSubLabel}>1 Inactivos</Text>
            </View>
          </View>

          {/* Barra de búsqueda con botón + */}
          <View style={styles.searchBarContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar usuario por nombre o correo..."
              placeholderTextColor={colors.textMuted}
            />
            <TouchableOpacity style={styles.searchPlusButton}>
              <Text style={styles.searchPlusIcon}>＋</Text>
            </TouchableOpacity>
          </View>

          {/* Filtros rápidos (Chips) */}
          <View style={styles.filterChipsRow}>
            <TouchableOpacity
              style={[styles.filterChip, styles.filterChipActive]}
            >
              <Text
                style={[styles.filterChipText, styles.filterChipTextActive]}
              >
                Todos (4)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Administradores (1)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Participantes (3)</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de Usuarios */}
          {usersList.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <View
                style={[
                  styles.userAvatar,
                  { backgroundColor: user.avatarBg },
                ]}
              >
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>

              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
              </View>

              <View style={styles.badgesColumn}>
                <Badge
                  label={user.role}
                  type={user.role === 'Administrador' ? 'admin' : 'user'}
                />
                <View style={{ marginTop: 4 }}>
                  <Badge
                    label={user.status}
                    type={user.status === 'Activo' ? 'active' : 'inactive'}
                    showDot={true}
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.menuDotsButton}>
                <Text style={styles.menuDotsText}>⋮</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Navegación inferior Admin */}
      <BottomNav role="admin" activeTab="Usuarios" />
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
  statIconBadge: {
    marginBottom: 2,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F6',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 44,
    marginBottom: spacing.md,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
    color: colors.textMuted,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
  },
  searchPlusButton: {
    padding: 4,
  },
  searchPlusIcon: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  filterChipsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  filterChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: '#DCE6F8',
    borderColor: '#B8CDF0',
  },
  filterChipText: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  filterChipTextActive: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarEmoji: {
    fontSize: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  userEmail: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginTop: 2,
  },
  badgesColumn: {
    alignItems: 'flex-end',
    marginRight: spacing.sm,
  },
  menuDotsButton: {
    padding: 4,
  },
  menuDotsText: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
});
