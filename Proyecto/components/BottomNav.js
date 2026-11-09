/**
 * components/BottomNav.js
 * Barra de navegación inferior con pestañas para Administrador y Participante
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, typography } from '../styles/theme';

export default function BottomNav({
  role = 'admin', // 'admin' | 'participant'
  activeTab = 'Inicio',
  onTabPress,
}) {
  const adminTabs = [
    { key: 'Inicio', label: 'Inicio', icon: '🏠' },
    { key: 'Usuarios', label: 'Usuarios', icon: '👥' },
    { key: 'Categorias', label: 'Categorías', icon: '📁' },
    { key: 'Habilidades', label: 'Habilidades', icon: '⭐' },
    { key: 'Reportes', label: 'Reportes', icon: '📊' },
  ];

  const participantTabs = [
    { key: 'Inicio', label: 'Inicio', icon: '🏠' },
    { key: 'MisHabilidades', label: 'Mis habilidades', icon: '⭐' },
    { key: 'Publicar', label: 'Publicar', icon: '➕' },
    { key: 'Solicitudes', label: 'Solicitudes', icon: '📄' },
    { key: 'Perfil', label: 'Perfil', icon: '👤' },
  ];

  const tabs = role === 'admin' ? adminTabs : participantTabs;

  return (
    <View style={globalStyles.bottomNav}>
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.key.toLowerCase();
        return (
          <TouchableOpacity
            key={tab.key}
            style={globalStyles.bottomNavItem}
            onPress={() => onTabPress && onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            {isActive && <View style={globalStyles.bottomNavIndicator} />}
            <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
              {tab.icon}
            </Text>
            <Text
              style={[
                globalStyles.bottomNavText,
                isActive && globalStyles.bottomNavTextActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 18,
    opacity: 0.7,
  },
  tabIconActive: {
    opacity: 1,
  },
});
