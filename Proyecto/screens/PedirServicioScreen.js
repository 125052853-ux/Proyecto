//Screen para pedir un servicio

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

export default function SolicitarServiciosScreen() {
  const chipsCategorias = [
    { id: 'all', etiqueta: 'Todas', seleccionado: true },
    { id: 'tech', etiqueta: 'Tecnología', seleccionado: false },
    { id: 'design', etiqueta: 'Diseño', seleccionado: false },
    { id: 'lang', etiqueta: 'Idiomas', seleccionado: false },
    { id: 'school', etiqueta: 'Apoyo escolar', seleccionado: false },
  ];

  const servicios = [
    {
      id: '1',
      titulo: 'Clases de programación en Python',
      categoria: 'Tecnología',
      descripcion: 'Te enseño lo básico de Python, estructuras y ejercicios.',
      autor: 'Leonardo S.',
      tipo: 'tech',
      fondoEtiqueta: '#EDE9FE',
      colorEtiqueta: '#6D28D9',
    },
    {
      id: '2',
      titulo: 'Diseño de logos',
      categoria: 'Diseño',
      descripcion: 'Creación de logos simples y profesionales.',
      autor: 'Aaron C.',
      tipo: 'music',
      fondoEtiqueta: '#FCE7F3',
      colorEtiqueta: '#9D174D',
    },
    {
      id: '3',
      titulo: 'Práctica de inglés',
      categoria: 'Idiomas',
      descripcion: 'Conversaciones en inglés para mejorar tu fluidez.',
      autor: 'Jorge B.',
      tipo: 'languages',
      fondoEtiqueta: '#DCFCE7',
      colorEtiqueta: '#166534',
    },
    {
      id: '4',
      titulo: 'Apoyo en matemáticas',
      categoria: 'Apoyo escolar',
      descripcion: 'Explicación de temas de álgebra, cálculo y ejercicios.',
      autor: 'Antonio R.',
      tipo: 'design',
      fondoEtiqueta: '#FEF3C7',
      colorEtiqueta: '#92400E',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Solicitar servicios"
        subtitle="Encuentra habilidades que te interesan"
        showBack={true}
      />

      {/* Contenido */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Barra de Búsqueda */}
          <View style={estilos.barraBusqueda}>
            <Text style={estilos.iconoBusqueda}>🔍</Text>
            <TextInput
              style={estilos.inputBusqueda}
              placeholder="Buscar servicios..."
              placeholderTextColor={colors.textMuted}
            />
          </View>

          {/* Categoría Chips */}
          <Text style={estilos.encabezadoSeccion}>Categoría</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={estilos.scrollChips}
          >
            {chipsCategorias.map((chip) => (
              <TouchableOpacity
                key={chip.id}
                style={[
                  estilos.chip,
                  chip.seleccionado && estilos.chipSeleccionado,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    estilos.textoChip,
                    chip.seleccionado && estilos.textoChipSeleccionado,
                  ]}
                >
                  {chip.etiqueta}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Tarjetas de Servicios */}
          {servicios.map((servicio) => (
            <View key={servicio.id} style={estilos.tarjetaServicio}>
              <View style={estilos.filaEncabezadoTarjeta}>
                <CategoryIcon type={servicio.tipo} size={48} />
                <View style={estilos.grupoTituloCategoria}>
                  <Text style={estilos.tituloServicio}>{servicio.titulo}</Text>
                  <View
                    style={[
                      estilos.etiquetaCategoria,
                      { backgroundColor: servicio.fondoEtiqueta },
                    ]}
                  >
                    <Text
                      style={[
                        estilos.textoEtiquetaCategoria,
                        { color: servicio.colorEtiqueta },
                      ]}
                    >
                      {servicio.categoria}
                    </Text>
                  </View>
                </View>
              </View>

              <Text style={estilos.textoDescripcion}>{servicio.descripcion}</Text>

              <View style={estilos.filaPieTarjeta}>
                <View style={estilos.grupoAutor}>
                  <View style={estilos.avatarAutor}>
                    <Text style={{ fontSize: 13 }}>👤</Text>
                  </View>
                  <Text style={estilos.nombreAutor}>{servicio.autor}</Text>
                </View>

                <TouchableOpacity style={estilos.botonSolicitar} activeOpacity={0.8}>
                  <Text style={estilos.textoBotonSolicitar}>Solicitar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Navegación inferior Participante */}
      <BottomNav role="participant" activeTab="Solicitudes" />
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
  barraBusqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    marginBottom: spacing.md,
  },
  iconoBusqueda: {
    fontSize: 16,
    color: colors.textMuted,
    marginRight: 8,
  },
  inputBusqueda: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
  },
  encabezadoSeccion: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  scrollChips: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingBottom: spacing.lg,
  },
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  chipSeleccionado: {
    backgroundColor: '#DCE6F8',
    borderColor: '#B8CDF0',
  },
  textoChip: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  textoChipSeleccionado: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  tarjetaServicio: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  filaEncabezadoTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grupoTituloCategoria: {
    flex: 1,
    marginLeft: spacing.md,
  },
  tituloServicio: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  etiquetaCategoria: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    marginTop: 4,
  },
  textoEtiquetaCategoria: {
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  textoDescripcion: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginVertical: spacing.md,
    lineHeight: 16,
  },
  filaPieTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grupoAutor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarAutor: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  nombreAutor: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  botonSolicitar: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
  },
  textoBotonSolicitar: {
    color: colors.white,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.bold,
  },
});