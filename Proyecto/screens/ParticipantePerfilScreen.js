//Screen perfil del participante

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function PerfilParticipanteScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Mi perfil"
        subtitle="Tu información personal"
        showBack={true}
        rightComponent={
          <TouchableOpacity activeOpacity={0.7} style={estilos.botonEngranaje}>
            <Text style={{ fontSize: 18, color: colors.white }}>⚙️</Text>
          </TouchableOpacity>
        }
      />

      {/* Contenido en ScrollView */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Tarjeta de Resumen de Perfil */}
          <View style={estilos.tarjetaPerfil}>
            <View style={estilos.contenedorAvatar}>
              <View style={estilos.circuloAvatar}>
                <Text style={estilos.emojiAvatar}>👤</Text>
              </View>
              <View style={estilos.insigniaCamara}>
                <Text style={estilos.iconoCamara}>📷</Text>
              </View>
            </View>

            <View style={estilos.detallesPerfil}>
              <Text style={estilos.nombreUsuario}>Leonardo Suarez</Text>
              <Text style={estilos.correoUsuario}>Leonardo.Suarez@gmail.com</Text>
              <Text style={estilos.telefonoUsuario}>+52 55 1234 5678</Text>
            </View>

            <TouchableOpacity style={estilos.botonEditarPerfil} activeOpacity={0.7}>
              <Text style={estilos.textoEditarPerfil}>✏️ Editar perfil</Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta Información Personal */}
          <View style={estilos.tarjetaSeccion}>
            <View style={estilos.filaTituloSeccion}>
              <View style={estilos.filaIconoTitulo}>
                <Text style={estilos.icono}>👤</Text>
                <Text style={estilos.tituloSeccion}>Información personal</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={estilos.enlaceEditar}>✏️ Editar</Text>
              </TouchableOpacity>
            </View>

            <View style={estilos.filaInfo}>
              <Text style={estilos.etiquetaInfo}>Nombre</Text>
              <Text style={estilos.valorInfo}>Leonardo Suarez</Text>
            </View>

            <View style={estilos.filaInfo}>
              <Text style={estilos.etiquetaInfo}>Correo electrónico</Text>
              <Text style={estilos.valorInfo}>Leonardo.Suarez@gmail.com</Text>
            </View>

            <View style={estilos.filaInfo}>
              <Text style={estilos.etiquetaInfo}>Teléfono</Text>
              <Text style={estilos.valorInfo}>+52 55 1234 5678</Text>
            </View>

            <View style={estilos.filaInfo}>
              <Text style={estilos.etiquetaInfo}>Fecha de nacimiento</Text>
              <Text style={estilos.valorInfo}>10 de mayo de 2004</Text>
            </View>

            <View style={[estilos.filaInfo, { borderBottomWidth: 0 }]}>
              <Text style={estilos.etiquetaInfo}>Ciudad</Text>
              <Text style={estilos.valorInfo}>Queretaro</Text>
            </View>
          </View>

          {/* Tarjeta Sobre Mí */}
          <View style={estilos.tarjetaSeccion}>
            <View style={estilos.filaTituloSeccion}>
              <View style={estilos.filaIconoTitulo}>
                <Text style={estilos.icono}>📄</Text>
                <Text style={estilos.tituloSeccion}>Sobre mí</Text>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={estilos.enlaceEditar}>✏️ Editar</Text>
              </TouchableOpacity>
            </View>

            <View style={estilos.cajaBiografia}>
              <Text style={estilos.textoBiografia}>
                Soy leonardo integrante del equipo
              </Text>
            </View>
          </View>

          {/* Tarjeta Seguridad */}
          <View style={estilos.tarjetaSeccion}>
            <View style={estilos.filaIconoTitulo}>
              <Text style={estilos.icono}>🛡️</Text>
              <Text style={estilos.tituloSeccion}>Seguridad</Text>
            </View>

            <TouchableOpacity style={estilos.elementoMenu} activeOpacity={0.7}>
              <Text style={{ fontSize: 16, marginRight: 8 }}>🔒</Text>
              <Text style={estilos.tituloElementoMenu}>Cambiar contraseña</Text>
              <Text style={estilos.flecha}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.elementoMenu} activeOpacity={0.7}>
              <Text style={{ fontSize: 16, marginRight: 8 }}>🛡️</Text>
              <Text style={estilos.tituloElementoMenu}>Verificar correo electrónico</Text>
              <Text style={estilos.flecha}>›</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Navegación inferior con pestaña Perfil activa */}
      <BottomNav role="participant" activeTab="Perfil" />
    </View>
  );
}

const estilos = StyleSheet.create({
  cuerpo: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  contenidoScroll: {
    paddingBottom: 24,
  },
  botonEngranaje: {
    padding: 4,
  },
  tarjetaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  contenedorAvatar: {
    position: 'relative',
    marginRight: spacing.md,
  },
  circuloAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiAvatar: {
    fontSize: 28,
  },
  insigniaCamara: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  iconoCamara: {
    fontSize: 10,
  },
  detallesPerfil: {
    flex: 1,
  },
  nombreUsuario: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  correoUsuario: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginTop: 2,
  },
  telefonoUsuario: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
  botonEditarPerfil: {
    backgroundColor: '#E8EDF9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: borderRadius.md,
  },
  textoEditarPerfil: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold,
  },
  tarjetaSeccion: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  filaTituloSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  filaIconoTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    fontSize: 16,
    marginRight: 8,
  },
  tituloSeccion: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  enlaceEditar: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
    fontWeight: typography.fontWeights.semiBold,
  },
  filaInfo: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  etiquetaInfo: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  valorInfo: {
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.medium,
  },
  cajaBiografia: {
    backgroundColor: '#F8FAFC',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: 4,
  },
  textoBiografia: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  elementoMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  tituloElementoMenu: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.medium,
  },
  flecha: {
    fontSize: 18,
    color: colors.textMuted,
  },
});