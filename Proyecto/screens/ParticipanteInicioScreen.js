//Screen de la pantalla de inicio del participante

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
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function InicioParticipanteScreen() {
  const serviciosDisponibles = [
    {
      id: '1',
      titulo: 'Clases de programación',
      categoria: 'Tecnología',
      descripcion: 'Te enseño lo básico de programación en Python.',
      tipo: 'tech',
      estado: 'Disponible',
    },
    {
      id: '2',
      titulo: 'Diseño de logos',
      categoria: 'Diseño',
      descripcion: 'Creación de logos simples y profesionales.',
      tipo: 'music', // esquema rosa
      estado: 'Disponible',
    },
    {
      id: '3',
      titulo: 'Práctica de inglés',
      categoria: 'Idiomas',
      descripcion: 'Conversaciones en inglés para mejorar tu fluidez.',
      tipo: 'languages',
      estado: 'Disponible',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado Superior */}
      <View style={estilos.encabezadoSuperior}>
        <View>
          <Text style={estilos.tituloSaludo}>Hola, Jorge</Text>
          <Text style={estilos.subtituloSaludo}>Bienvenido, participante</Text>
        </View>

        <TouchableOpacity style={estilos.botonAvatarUsuario} activeOpacity={0.8}>
          <Text style={{ fontSize: 20 }}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Contenedor Principal */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Fila de 3 Métricas Rápidas */}
          <View style={estilos.filaMetricas}>
            {/* 1. Mis habilidades */}
            <View style={[estilos.tarjetaMetrica, { backgroundColor: '#E8EDF9' }]}>
              <Text style={estilos.iconoMetrica}>🧑‍🚒</Text>
              <Text style={estilos.numeroMetrica}>3</Text>
              <Text style={estilos.etiquetaMetrica}>Mis habilidades</Text>
            </View>

            {/* 2. Servicios publicados */}
            <View style={[estilos.tarjetaMetrica, { backgroundColor: '#E6F8F0' }]}>
              <Text style={estilos.iconoMetrica}>📄</Text>
              <Text style={estilos.numeroMetrica}>2</Text>
              <Text style={estilos.etiquetaMetrica}>Servicios publicados</Text>
            </View>

            {/* 3. Solicitudes pendientes */}
            <View style={[estilos.tarjetaMetrica, { backgroundColor: '#FEF6E6' }]}>
              <Text style={estilos.iconoMetrica}>🕒</Text>
              <Text style={estilos.numeroMetrica}>1</Text>
              <Text style={estilos.etiquetaMetrica}>Solicitudes pendientes</Text>
            </View>
          </View>

          {/* Sección Servicios disponibles */}
          <View style={estilos.filaEncabezadoSeccion}>
            <Text style={estilos.tituloSeccion}>Servicios disponibles</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={estilos.enlaceVerTodos}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de Servicios */}
          {serviciosDisponibles.map((servicio) => (
            <View key={servicio.id} style={estilos.tarjetaServicio}>
              <CategoryIcon type={servicio.tipo} size={48} />

              <View style={estilos.infoServicio}>
                <View style={estilos.filaTituloServicio}>
                  <Text style={estilos.tituloServicio}>{servicio.titulo}</Text>
                  <View style={estilos.insigniaDisponible}>
                    <Text style={estilos.textoInsigniaDisponible}>{servicio.estado}</Text>
                  </View>
                </View>

                <Text style={estilos.categoriaServicio}>{servicio.categoria}</Text>
                <Text style={estilos.descServicio}>{servicio.descripcion}</Text>
              </View>
            </View>
          ))}

          {/* Sección Solicitudes pendientes */}
          <View style={[estilos.filaEncabezadoSeccion, { marginTop: spacing.md }]}>
            <Text style={estilos.tituloSeccion}>Solicitudes pendientes</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={estilos.enlaceVerTodos}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          {/* Tarjeta de Solicitud pendiente */}
          <TouchableOpacity style={estilos.tarjetaPendiente} activeOpacity={0.8}>
            <View style={estilos.avatarPendiente}>
              <Text style={{ fontSize: 20 }}>👥</Text>
            </View>

            <View style={estilos.infoPendiente}>
              <View style={estilos.filaTituloPendiente}>
                <Text style={estilos.tituloPendiente}>Clases de matemáticas</Text>
                <View style={estilos.pildoraPendiente}>
                  <Text style={estilos.textoPildoraPendiente}>Pendiente</Text>
                </View>
              </View>

              <Text style={estilos.remitentePendiente}>Leonardo C</Text>
              <Text style={estilos.fechaPendiente}>📅 Recibida el 25 sep 2026</Text>
            </View>

            <Text style={estilos.flecha}>›</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Barra de Navegación Participante */}
      <BottomNav role="participant" activeTab="Inicio" />
    </View>
  );
}

const estilos = StyleSheet.create({
  encabezadoSuperior: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingTop: 48,
    paddingBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloSaludo: {
    color: colors.white,
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
  },
  subtituloSaludo: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: typography.fontSizes.xs,
    marginTop: 2,
  },
  botonAvatarUsuario: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  filaMetricas: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  tarjetaMetrica: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconoMetrica: {
    fontSize: 16,
    marginBottom: 4,
  },
  numeroMetrica: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  etiquetaMetrica: {
    fontSize: 10,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  filaEncabezadoSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  tituloSeccion: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  enlaceVerTodos: {
    fontSize: typography.fontSizes.xs,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  tarjetaServicio: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  infoServicio: {
    flex: 1,
    marginLeft: spacing.md,
  },
  filaTituloServicio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloServicio: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  insigniaDisponible: {
    backgroundColor: '#E6F8F0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  textoInsigniaDisponible: {
    fontSize: 10,
    color: '#065F46',
    fontWeight: typography.fontWeights.semiBold,
  },
  categoriaServicio: {
    fontSize: 11,
    color: colors.textMuted,
    marginVertical: 2,
  },
  descServicio: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    lineHeight: 15,
  },
  tarjetaPendiente: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  avatarPendiente: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  infoPendiente: {
    flex: 1,
  },
  filaTituloPendiente: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloPendiente: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  pildoraPendiente: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  textoPildoraPendiente: {
    fontSize: 10,
    color: '#92400E',
    fontWeight: typography.fontWeights.semiBold,
  },
  remitentePendiente: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  fechaPendiente: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 2,
  },
  flecha: {
    fontSize: 18,
    color: colors.textMuted,
    marginLeft: 6,
  },
});